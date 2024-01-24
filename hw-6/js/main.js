let numOrStr = prompt('Input number or string:');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('You canceled');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    case isNaN(+numOrStr):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!')
        break;
}