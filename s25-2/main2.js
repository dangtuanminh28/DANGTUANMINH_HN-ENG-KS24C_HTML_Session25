function sum(a, b) {
    if (a % 1 !== 0 || b % 1 !== 0) return 0;
    return a + b;
}
console.log(sum(2, 6));
console.log(sum(3, "text"));
console.log(sum(7, -7));
console.log(sum(4.5, 3));