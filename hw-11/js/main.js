const primeNumbers = [2, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 11, 13, 17, 19, 23, 5, 5, 5, 5, 5, 29, 31, 37, 41, 47, 53, 59, 67, 71, 83, 89, 101, 107, 109, 113, 127];
console.log(primeNumbers);

let itemToRemove = 5;

function removeElement(array, item) {
    let indexOfItem = array.indexOf(item);
    while (indexOfItem !== -1) {
        array.splice(indexOfItem, 1);
        indexOfItem = array.indexOf(item);
    }
}

removeElement(primeNumbers, itemToRemove);
console.log(primeNumbers);

