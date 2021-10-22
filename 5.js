class Device {
    constructor(watts) {
        this.watts = watts;
        this.plug = false;
    };

    energyConsumption (hours) {
        if (this.plug) {
            return `${this.watts * hours} watts`;
        } else {
            return `The ${this.name} isn't plugin`;
        };
    };

    plugIn() {
        this.plug = true;
    };

    plugOut() {
        this.plug = false;
    };
};

class TV extends Device {
    constructor(name, color, watts) {
        super(watts);
        this.name = "TV " + name;
        this.color = color;
    };
};

class Iron extends Device {
    constructor(name, color, watts) {
        super(watts);
        this.name = "Iron " + name;
        this.color = color;
    };
};

const myTV = new TV("lounge", "black", 1000);
const myIron = new Iron("home", "blue", 2000);

myIron.plugIn();

console.log(myTV.energyConsumption(6));
console.log(myIron.energyConsumption(2));

console.log(myTV);
console.log(myIron);