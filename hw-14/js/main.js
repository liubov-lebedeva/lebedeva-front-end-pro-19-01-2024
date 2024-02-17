class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Name is ${this.name}, ${this.age} year(s) old`);
    }
}

class Car {
    _owner;

    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    set owner(person) {
        if (person.age >= 18) {
            this._owner = person;
        } else {
            console.log(`${person.name} is under 18`);
        }
    }

    printInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, production year: ${this.year}, car number: ${this.number}`);
        if (this._owner) {
            this._owner.printInfo();
        }
    }
}

const john = new Person('John', 16);
const bush = new Person('Bush', 45);
const michael = new Person('Michael', 18);

const mers = new Car('Mercedes', 'E200', 2021, 'AA5667BN');
const bmw = new Car('BMW', 'M3', 1988, 'AI6860NB');

mers.owner = john;
mers.printInfo();
mers.owner = bush;
mers.printInfo();
bmw.owner = michael;
bmw.printInfo();