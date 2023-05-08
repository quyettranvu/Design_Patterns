//Interface Prototype
class OnlineFootballPlayer {
  constructor(name, team, position, price) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.price = price;
  }

  deal() {
    this.price = this.price * 1.5;
  }

  clone() {
    return new OnlineFootballPlayer(
      this.name,
      this.team,
      this.position,
      this.price
    );
  }
}

//prototype stats
OnlineFootballPlayer.prototype.stats = {
  goals: 10,
};

const prototypePattern = new OnlineFootballPlayer(
  "Frank Lampard",
  "Chelsea",
  "FW",
  20000
);

//Create concrete prototype instances
const flp = prototypePattern.clone();
flp.stats.goals = 100;
const cr7 = prototypePattern.clone();
cr7.name = "Rolnaldo";
cr7.team = "Manchester United";
cr7.price = "18000";

console.log("-------------------------Summary ---------------------------");
flp.deal();
console.log(
  `${flp.name} is sold with ${flp.price} and scored ${flp.stats.goals} goals this season`
);

cr7.deal();
console.log(
  `${cr7.name} is sold with ${cr7.price} and scored ${cr7.stats.goals} goals this season`
);

/*
P/s: The Prototype Pattern allows:
-Create many copies that shouldn’t depend on the concrete classes of objects that you need to copy(means the prototype instance is a very stable object)
-Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects

But there is a problem that every prototypes created from the prototype instance will share the same prototype stats so to avoid that we can use some special copies
*/
