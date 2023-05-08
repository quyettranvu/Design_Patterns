//Abstraction(Interface) where client will contact directly with
class PaymentProcess {
  pay(amount) {}
}

//Interface Implementations
class VisaPaymentMethodProcess extends PaymentProcess {
  constructor(name, cardNumber, expireDate, cvvNumber) {
    super(); //inherit
    this.name = name;
    this.cardNumber = cardNumber;
    this.expireDate = expireDate;
    this.cvvNumber = cvvNumber;
  }

  pay(amount) {
    console.log(
      `You are paying ${amount} USD with visa card via ${this.cardNumber}...`
    );
  }
}

class MomoPaymentMethodProcess extends PaymentProcess {
  constructor(name, phoneNumber) {
    super(); //inherit
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  pay(amount) {
    console.log(
      `You are paying ${amount} USD with momo card via ${this.phoneNumber}...`
    );
  }
}

//Concrete Implementation
class GymMemberRegistration {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  register() {
    const amount = 100;
    this.paymentProcessor.pay(amount);
    console.log("You successfully paid your services!");
  }
}

//Instances
const myVisaPayment = new VisaPaymentMethodProcess(
  "quyettranvu",
  "12345678",
  "12/35",
  "123"
);
const gymMemberShip = new GymMemberRegistration(myVisaPayment);
gymMemberShip.register();

const myMomoPayment = new MomoPaymentMethodProcess("quyettranvu", "0123456789");
const gymPackage = new GymMemberRegistration(myMomoPayment);
gymPackage.register();

/*
P/s:
-Some famous examples for this pattern appears: define GUI independently for admin and user roles, for many platforms(Windows, Linux, MacOS)(in cross-platform application),... then the implementation will be interchangeable
-The Bridge Pattern is used:
◦ when you want to divide and organize a monolithic class that has several variants of some functionality (for example, if the class can work with various database servers).
◦ when you need to extend a class in several orthogonal (independent) dimensions.
-if you need to be able to switch implementations at runtime.

***Though Bridge, State, Strategy have very similar structures. Indeed, all of these patterns are based on composition, which is delegating work to other objects
But Bridge is used to decouple an abstraction from its implementation, State is used to allow an object to change its behavior based on its internal state, and Strategy is used to encapsulate a family of algorithms and make them interchangeable.

Example:
-Bridge: if you have a drawing application, you might want to create a system that can work with different types of drawing tools (e.g. pencils, brushes, markers). By using the Bridge pattern, you can create an abstraction for the drawing tool and separate it from its implementation so that you can easily add new tools without affecting the rest of the system.
-State: if you have a vending machine, it might behave differently depending on whether or not it has enough change to make a sale. By using the State pattern, you can define different states for the vending machine (e.g. "has change", "out of change") and allow it to change its behavior based on its current state.
-Strategy: if you have a sorting algorithm, you might want to be able to switch between different sorting strategies (e.g. quicksort, mergesort) depending on the size of the data set being sorted. By using the Strategy pattern, you can define different strategies for sorting and switch between them at runtime.
*/
