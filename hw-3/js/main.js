let a = prompt("number 1:")
let b = prompt("number 2:")
a = Number(a)
b = Number(b)

alert(
    `${a} + ${b} = ${a + b}\n` +
    `${a} - ${b} = ${a - b}\n` +
    `${a} * ${b} = ${a * b}\n` +
    `${a} / ${b} = ${a / b}`
)