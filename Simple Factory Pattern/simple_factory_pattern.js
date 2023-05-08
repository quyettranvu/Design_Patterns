//withoud using simpple factory pattern
const serviceShippingLogistics = (carriageVolume) => {
  switch (carriageVolume) {
    case "50":
      return {
        name: "Truck A",
        speed: 100,
        price: "150.000 VND",
      };

    case "100":
      return {
        name: "Truck B",
        speed: 150,
        price: "200.000 VND",
      };
  }
};

// console.log(serviceShippingLogistics("50"));

//With simple factory pattern
class ServiceShippingLogistics {
  constructor(name = "Truck A", speed = 100, price = "100.000 VND") {
    this.name = name;
    this.speed = speed;
    this.price = price;
  }

  static getTransportation = (carriageVolume) => {
    switch (carriageVolume) {
      case "50":
        return new ServiceShippingLogistics();
      case "100":
        return new ServiceShippingLogistics("Truck B", 150, "200.000 VND");
    }
  };
}

console.log(ServiceShippingLogistics.getTransportation("50"));

/*
Simple Factory Pattern supplies methods of creating objects and using objects independently and logically,
but since the role is focused on function getTransportation so if want to extend function -> not fitting Opened/Closed Principle 
*/
