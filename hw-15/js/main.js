class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    addResident(person) {
        this.residents.push(person);
    }
}

class ApartmentHouse {
    apartments = [];

    constructor(maxAmount) {
        this.maxAmount = maxAmount;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxAmount) {
            this.apartments.push(apartment);
            return true;
        } else {
            return false;
        }
    }
}

const john = new Person("John", "male");
const betty = new Person("Betty", "female");
const bush = new Person("Bush", "male");
const michaela = new Person("Michaela", "female");
const izzy = new Person("Izzy", "female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(john);
apartment1.addResident(betty);
apartment2.addResident(bush);
apartment2.addResident(michaela);
apartment3.addResident(izzy);

const apartmentHouse1 = new ApartmentHouse(2);
const apartmentHouse2 = new ApartmentHouse(0);

const apartments = [apartment1, apartment2, apartment3];
const apartmentHouses = [apartmentHouse1, apartmentHouse2];

let houseIndex = 0;
let apartmentIndex = 0;

while (apartmentIndex < apartments.length && houseIndex < apartmentHouses.length) {
    let wasAdded = apartmentHouses[houseIndex].addApartment(apartments[apartmentIndex]);
    if (wasAdded) {
        apartmentIndex++;
        console.log(`Apartment number ${apartmentIndex} was added to house number ${houseIndex}`);
    } else {
        console.log(`House number ${houseIndex} is full.`);
        houseIndex++;
    }
}
