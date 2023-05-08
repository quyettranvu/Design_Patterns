//Director
class OnlineGymProductOrder {
  constructor(builder) {
    this.nameProduct = builder.nameProduct;
    this.categoryProduct = builder.categoryProduct;
    this.modelProduct = builder.modelProduct;
    this.quantityProduct = builder.quantityProduct;
    this.priceProduct = builder.priceProduct;
    this.statsProduct = builder.statsProduct;
  }

  toString() {
    let onlineOrder = `Order: \n`;
    onlineOrder += `- Name: ${this.nameProduct}\n`;
    onlineOrder += `- Category: ${this.categoryProduct}\n`;
    onlineOrder += `- Model: ${this.modelProduct}\n`;
    onlineOrder += `- Quantity: ${this.quantityProduct}\n`;
    onlineOrder += `- Price: ${this.priceProduct}\n`;
    onlineOrder += `- Stats: ${JSON.stringify(this.statsProduct)}\n`;
    return onlineOrder;
  }
}

//Interface builder
class OnlineGymProductOrderBuilder {
  constructor() {
    this.nameProduct = "";
    this.categoryProduct = "";
    this.modelProduct = "";
    this.quantityProduct = 0;
    this.priceProduct = 0;
    this.statsProduct = {};
  }

  withName(nameProduct) {
    this.nameProduct = nameProduct;
    return this;
  }

  withCategory(categoryProduct) {
    this.categoryProduct = categoryProduct;
    return this;
  }

  withModel(modelProduct) {
    this.modelProduct = modelProduct;
    return this;
  }

  withQuantity(quantityProduct) {
    this.quantityProduct = quantityProduct;
    return this;
  }

  withPrice(priceProduct) {
    this.priceProduct = priceProduct;
    return this;
  }

  withStats(statsProduct) {
    this.statsProduct = statsProduct;
    return this;
  }

  build() {
    return new OnlineGymProductOrder(this);
  }
}

//Concrete Builder
const builderPattern = new OnlineGymProductOrderBuilder();

const proteinBar = builderPattern
  .withName("Protein Bar High Wave")
  .withCategory("Healthy Snacks")
  .withModel("Be Only One")
  .withQuantity(2)
  .withPrice(50000)
  .withStats({ date: "30/04/2023", proteinAmount: 20 })
  .build();

console.log(proteinBar.toString());

const wheyProtein = builderPattern
  .withName("Whey Protein Strong Wave")
  .withCategory("Healthy Drink")
  .withModel("Be Only Two")
  .withQuantity(3)
  .withPrice(200000)
  .withStats({ date: "25/04/2023", proteinAmount: 1000 })
  .build();

console.log(wheyProtein.toString());

/*
P/s: The Builder pattern lets you:
-Build objects step by step(by details), using only those steps that you really need.
-Use the Builder pattern when you want your code to be able to create different representations of some product 
=>So The base builder interface defines all possible construction steps, and concrete builders implement these steps to construct particular representations of the product. Meanwhile,
the director class guides the order of construction.(main difference with Prototype pattern where in Builder pattern the interface contains detailed construction steps)
-Use the Builder to construct Composite trees or other complex objects. A builder doesn’t expose the unfinished product while running
construction steps. This prevents the client code from fetching an incomplete result
*/
