function Device (watts) {
    this.watts = watts;
    this.plug = false;
};

Device.prototype.energyConsumption = function (hours) {
    if (this.plug) {
        return `${this.watts * hours} watts`;
    } else {
        return `The ${this.name} isn't plugin`;
    };
};

Device.prototype.plugIn = function () {
    this.plug = true;
};

Device.prototype.plugOut = function () {
    this.plug = false;
};

function TV (name, color, watts) {
    this.name = "TV " + name;
    this.color = color;
    this.watts = watts;
};

TV.prototype = new Device();

function Iron (name, color, watts) {
    this.name = "Iron " + name;
    this.color = color;
    this.watts = watts;
};

Iron.prototype = new Device();

const myTV = new TV("lounge", "black", 1000);
const myIron = new Iron("home", "blue", 2000);

myTV.plugIn();

console.log(myTV.energyConsumption(6));
console.log(myIron.energyConsumption(2));

console.log(myTV);
console.log(myIron);