function isPrime(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return "Dữ liệu không hợp lệ";
    }
    if (n < 2) {
        return "Không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Không phải là số nguyên tố";
        }
    }
    return "Là số nguyên tố";
}
console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime("text"));