//first task
let resultString = "";
for (let i = 20; i <= 30; i = i + 0.5) {
    if (i !== 30) {
        resultString = resultString + i + " ";
    } else {
        resultString = resultString + i;
    }
}
alert(resultString);

//second task
const oneDollar = 27;
resultString = "";
for (let i = 10; i <= 100; i = i + 10) {
    let dollarExchangeRate = oneDollar * i;
    resultString += dollarExchangeRate + " ";
}
alert(resultString);

//third task
const N = Number(prompt("Input integer number:"));
resultString = "";
for (let i = 1; i <= 100; i++) {
    if (i ** 2 < N) {
        resultString += i + " ";
    }
}
alert(resultString);