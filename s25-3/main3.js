function numbers(arr) {
    if (arr.length < 1 || arr[0] > arr) return 0;
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 1 === 0 && arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }

    if (evens.length > 0) {
        return evens;
    }
    return 1;
}
console.log(numbers([11, 4, 65, 6]));
console.log(numbers([1, 3, 5, 17]));
console.log(numbers("text"));
console.log(numbers([]));
console.log(numbers([2, 8, 10]));