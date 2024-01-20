const userOperation = prompt("Enter math operation from following: add, sub, mult or div:");

const a = Number(prompt("number 1:"));
const b = Number(prompt("number 2:"));

switch (userOperation) {
    case "add":
        alert(`${a} + ${b} = ${a + b}`);
        break;
    case "sub":
        alert(`${a} - ${b} = ${a - b}`);
        break;
    case "mult":
        alert(`${a} * ${b} = ${a * b}`);
        break;
    case "div":
        alert(`${a} / ${b} = ${a / b}`);
        break;
    default:
        alert("You have entered wrong operation! Reload page and try again.")
}
