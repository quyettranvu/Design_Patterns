//Subsystems(about calclation of performance of function Login with faceID in the system)

class Mobilefacenet {
  calc(value) {
    return value;
  }
}

class Preprocessing {
  calc(value) {
    return value * 1.1;
  }
}

class FeaturesConvoLayer {
  calc() {
    return 20;
  }
}

class FaceRecognitionFacadePattern {
  constructor() {
    this.model = new Mobilefacenet();
    this.preprocessing = new Preprocessing();
    this.features = new FeaturesConvoLayer();
  }

  calc(value_performance) {
    value_performance = this.model.calc(value_performance);
    console.log("Performance applied model: " + value_performance);

    value_performance = this.preprocessing.calc(value_performance);
    console.log("Performance applied preprocessing: " + value_performance);

    value_performance += this.features.calc(value_performance);
    console.log("Performance applied features: " + value_performance);

    return value_performance;
  }
}

function applyFunction(value_performance) {
  const faceRecognitionFunction = new FaceRecognitionFacadePattern();
  console.log(
    `Performance :: ${faceRecognitionFunction.calc(value_performance)} %`
  );
}

applyFunction(50);

/*
P/s: The Facade Pattern allows to have a limited but straightforward interface to a complex subsystem or structure a subsystem into layers.
*/
