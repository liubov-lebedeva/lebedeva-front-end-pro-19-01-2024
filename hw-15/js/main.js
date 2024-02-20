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
        } else {
            console.log("This apartment doesn't fit.");
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


const apartmentHouse1 = new ApartmentHouse(3);
const apartmentHouse2 = new ApartmentHouse(0);
apartmentHouse1.addApartment(apartment1);
apartmentHouse1.addApartment(apartment2);
apartmentHouse2.addApartment(apartment3);

console.log(apartmentHouse1.apartments);
console.log(apartmentHouse2.apartments);
