//Interface Subscriber(in this case is a store where notifys and updates about new released products))
class Observer {
  constructor(name) {
    this.nameNewObserver = name;
  }

  updateStatus(day) {
    console.log(day);
  }

  goonStock(day) {
    console.log(
      `${
        this.nameNewObserver
      }:::New Product will be released on🔈:::${JSON.stringify(day)}`
    );
  }
}

//Publisher
class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  getMembers() {
    console.log(this.observerList);
  }

  //notify about changes
  notifyChanges(day) {
    this.observerList.forEach((observer) => observer.goonStock(day));
  }
}

const subject = new Subject();

//Clients-Concrete Subscribers: add them to the publisher
const personA = new Observer("PersonA");
const personB = new Observer("PersonB");
const personC = new Observer("PersonC");

subject.addObserver(personA);
subject.addObserver(personB);
subject.addObserver(personC);

//Now new released product will be notified to every concrete subscribers
subject.notifyChanges({ date: "10/06/2023", timeZone: "20:00:03" });
subject.getMembers();

/*
P/s: 
-The Observer pattern lets all the subscriber about state changes(new services) as long as they are in the subscription list. Observer also lets receivers dynamically subscribe to and unsubscribe from receiving requests.
-In Observer Pattern The push model involves the Subject sending updates to all its Observers, whether they want them or not. This means that the Subject is responsible for determining when and what updates to send out. 
(In case the store informs about new released products for observers)
the pull model involves the Observer requesting updates from the Subject when it wants them. This means that the Observer is responsible for determining when and what updates to receive.
(In case the store would not send updates unless requested by a subscriber)
*/
