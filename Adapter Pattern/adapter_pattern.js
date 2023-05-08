//Adapter
class XMLFileAdapter {
  constructor(XMLFile) {
    this.XMLFile = XMLFile;
  }

  useJsonFile(JSONFile) {
    const convertedFile = this.convertToJSONFile(this.XMLFile);

    //Use Service with converted file
    JSONFile.use(convertedFile);
  }

  convertToJSONFile(XMLFile) {
    const cdata_sections = { setting1: "ABC", setting2: "XYZ" };
    cdata_sections.setting3 = XMLFile.setting;
    const JsonFile = {
      attributes: XMLFile.attributes,
      elements: XMLFile.elements,
      namespaces: XMLFile.namespaces,
      comments: XMLFile.comments,
      processings: XMLFile.processings,
      entities: XMLFile.entities,
      CData: JSON.stringify(cdata_sections),
    };

    return JsonFile;
  }
}

class JSONFile {
  use(file) {
    console.log(
      `Usage of ${file.elements} with JSON file(settings): ${file.CData}...`
    );
    //TODO: usage processing login...
  }
}

//Frpm the Client Interface
class XMLFile {
  constructor(
    attributes,
    elements,
    namespaces,
    comments,
    processings,
    entities,
    setting
  ) {
    this.attributes = attributes;
    this.elements = elements;
    this.namespaces = namespaces;
    this.comments = comments;
    this.processings = processings;
    this.entities = entities;
    this.setting = setting;
  }
}

const xmlFile = new XMLFile(
  "pronew",
  "htmlcss",
  "brewing",
  "say yes",
  "processing...",
  "munching",
  { settingA: "settingA", settingB: "settingB" }
);

//create adapter
const xmlAdapter = new XMLFileAdapter(xmlFile);

const jsonFile = new JSONFile();

xmlAdapter.useJsonFile(jsonFile);

/*
P/s: The Adapter Pattern is used:
-When you want to use some existing class, but its interface isn’t compatible with the rest of your code
-When you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass(this approach is alike Decorator Pattern).
However, Adapter changes the interface of an existing object, while Decorator enhances an object without changing its interface. In addition, Decorator supports recursive composition, which isn’t
possible when you use Adapter.
Note: Make sure that you have at least two classes with incompatible interfaces:
◦ A useful service class, which you can’t change (often 3rdparty, legacy or with lots of existing dependencies).
◦ One or several client classes that would benefit from using the service class.

The Adapter Pattern follows 2 principles in SOLID: 
-Single Responsibility Principle.
-Open/Closed Principle(introduce new types of adapters into the program without breaking the existing client code) as long as tehy work with adapters through client interface 
*/
