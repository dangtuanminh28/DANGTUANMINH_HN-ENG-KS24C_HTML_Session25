function evenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let evens = arr.filter(num => Number.isInteger(num) && num % 2 === 0);

    return evens.length > 0 ? evens.join(", ") : "Mảng không chứa số chẵn";
}
console.log(evenNumbers([11, 4, 65, 6]));  // "4, 6"
console.log(evenNumbers([1, 3, 5, 17]));   // "Mảng không chứa số chẵn"
console.log(evenNumbers("text"));          // "Dữ liệu không hợp lệ"