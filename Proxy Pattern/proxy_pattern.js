//Real Service/Subject
class ServerSystem {
  receiveRequest(requests) {
    console.log(`Server responses:: OK, received: ${requests}`);
  }
}

//example: RabbitMQ
class MessageFlowBroker {
  constructor() {
    this.ServerSystem = new ServerSystem(); //create a service interface the same like real service(main difference with facade pattern)
  }

  receiveRequest(requests) {
    this.ServerSystem.receiveRequest(requests);
  }
}

class PotentialCustomers {
  constructor(requests) {
    this.requests = requests;
  }

  sendRequests(target) {
    target.receiveRequest(this.requests);
  }
}

const customerA = new PotentialCustomers("Solve problems relating to payments");
customerA.sendRequests(new MessageFlowBroker());

/*
P/s:Like Facade, Clients can send many requests (belongs to many topics that are independent each other) and don't need to know about inside complicated system
The Proxy Pattern helps us:
-Lazy initialization (virtual proxy) and access control (protection proxy)-just handler if requests match criterias
-Local execution of a remote service (remote proxy) and Logging requests (logging proxy). 
-Caching request results (caching proxy). This is when you need to cache results of client requests and manage the life cycle of
this cache, especially if results are quite large
-Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it
*/
