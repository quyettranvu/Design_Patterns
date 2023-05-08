class LoadBalancerServer {
  constructor() {
    //LoadBalancerServer.instance = this appears as creation part that ensures the same object is always returned
    if (LoadBalancerServer.instance) {
      return LoadBalancerServer.instance;
    }
    LoadBalancerServer.instance = this;
    this.servers = [];
    this.index = 0;
  }

  //add server
  addServer(server) {
    this.servers.push(server);
  }

  //get next server in list of servers
  getNextServer() {
    if (!this.servers.length) {
      throw new Error("No servers available");
    }

    const server = this.servers[this.index];

    //algorithm modulus
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalancer = new LoadBalancerServer();
const loadBalancer1 = new LoadBalancerServer();

console.log("Compare::", loadBalancer === loadBalancer1);

loadBalancer.addServer("Server number 1");
loadBalancer.addServer("Server number 2");
loadBalancer.addServer("Server number 3");

console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());

/*
The Singleton Pattern is used in cases:
-Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.
-Use the Singleton pattern when you need stricter control over global variables
-Solve the principle: Sinle Responsibility Principle
*/
