function find(arr) {
    if (!Array.isArray(arr))
        return 0;
    if (arr.length === 0)
        return 1;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(find([2, 4, 8, 1, 9]));
console.log(find([]));
console.log(find("abc"));
console.log(find([5, 2, 7, 5, 4]));