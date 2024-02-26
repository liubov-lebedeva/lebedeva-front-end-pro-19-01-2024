function countNumbersArithmeticMean(array) {
    let counter = 0;
    let divider = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number") {
            counter += array[i];
            divider++;
        }
    }
    return counter / (divider);
}

let differentTypesArray = [50, 'a', 'b', 'c', 30, 40, 60, 70, 'abc', '', null, true, false];
console.log(countNumbersArithmeticMean(differentTypesArray));
