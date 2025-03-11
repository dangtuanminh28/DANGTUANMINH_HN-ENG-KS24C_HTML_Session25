function find(arr) {
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }
    return `Phần tử nhỏ nhất trong mảng là ${Math.min(...arr)}`;
}
console.log(find([2, 4, 8, 1, 9]));
console.log(find([]));
console.log(find("abc"));
console.log(find([5, 2, 7, 5, 4]));