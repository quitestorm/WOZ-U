class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  set make(value) {
    const possibleMakes = ["Dodge", "Chevy", "Oppenhimmer"];

    if (possibleMakes.includes(value)) {
      this._make = value;
    } else {
      throw Error(value + " is a pice of crap");
    }
  }
 
  get description() {
    return + this._make + " " + this._model + " "+ this._year;
  }
 
}

let myCar = new Vehicle("ford", "cobra, 1969");
myCar.make= "ford"
console.log(myCar.make);

console.log(myCar.description);
