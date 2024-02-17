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
    owner;

    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    setOwner(person) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            console.log(`${person.name} is under 18`);
        }
    }

    printInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, production year: ${this.year}, car number: ${this.number}`);
        if (this.owner) {
            this.owner.printInfo();
        }
    }
}

const john = new Person('John', 16);
const bush = new Person('Bush', 45);
const michael = new Person('Michael', 18);

const mers = new Car('Mercedes', 'E200', 2021, 'AA5667BN');
const bmw = new Car('BMW', 'M3', 1988, 'AI6860NB');

mers.setOwner(john);
mers.printInfo();
mers.setOwner(bush);
mers.printInfo();
bmw.setOwner(michael);
bmw.printInfo();