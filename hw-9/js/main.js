function power(num, degree) {
    return degree === 0 ? 1 : num * power(num, degree - 1);
}

console.log(power(2, 6));