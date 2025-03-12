function countPos(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }

    return count;
}
let input = prompt("Nhập mảng cách nhau bằng dấu phẩy");
let arr = input.split(",").map(Number);

console.log("Số dương trong mảng:", countPos(arr));