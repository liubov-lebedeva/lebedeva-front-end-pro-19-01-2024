let resultString = "";
for (let i= 20; i <= 30; i = i + 0.5 ) {
    if (i != 30) {
        resultString = resultString + i + " ";
    } else {
        resultString = resultString + i;
    }
}
alert(resultString);