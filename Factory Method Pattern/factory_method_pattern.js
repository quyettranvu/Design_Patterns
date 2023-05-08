class Iphone14 {
  constructor({
    name = "Iphone 14 Green",
    cameras = 3,
    price = "1000$",
    customerInfo = {},
  }) {
    this.name = name;
    this.cameras = cameras;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

//Service Product Order
class ServiceOrders {
  productClass = Iphone14;
  getOrder = (customerInfo) => {
    return new this.productClass(customerInfo);
  };
}

//Order Ihone 14 for Customer
const productOrder = new ServiceOrders();
console.log(
  "Detail of order::",
  productOrder.getOrder({
    customerInfo: { name: "quyettranvu", timeShipping: "2 days" },
  })
);

//Now when we want to add more products we can do either of these ways
//Method 1: create instance
class Iphone14ProMax {
  constructor({
    name = "Iphone 14 Pro Max Gray",
    cameras = 4,
    price = "1500$",
    customerInfo = {},
  }) {
    this.name = name;
    this.cameras = cameras;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

productOrder.productClass = Iphone14ProMax;
console.log(
  "Detail of order::",
  productOrder.getOrder({
    customerInfo: { name: "tranthithuhoa", timeShipping: "3 days" },
  })
);

//Method 2: Using inheritance
class NewOrder extends ServiceOrders {
  productClass = Iphone14ProMax;
}

const newOrder = new NewOrder();
console.log(
  "Detail of order::",
  newOrder.getOrder({
    customerInfo: { name: "trankimcuong", timeShipping: "4 days" },
  })
);
