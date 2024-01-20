let userOperation = prompt ("Enter math operation from following: add, sub, mult or div:");

let a = prompt("number 1:");
let b = prompt("number 2:");
a = Number(a);
b = Number(b);

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
