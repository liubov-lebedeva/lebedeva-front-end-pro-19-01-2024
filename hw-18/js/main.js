let arrayLength = +prompt('To create array write length:');
let array = new Array(arrayLength);
for (let i = 0; i < arrayLength; i++) {
    array[i] = prompt(`Write ${i} array element:`);
}
console.log(array);

array.sort();
console.log(array);

array.splice(2,3);
console.log(array);