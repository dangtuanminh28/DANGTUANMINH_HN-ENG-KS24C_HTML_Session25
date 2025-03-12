let str = prompt("Nhập chuỗi bất kỳ:");
check(str);
function check(str) {
    let arr = str.split("");
    let n = arr.length - 1;
    let check = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[n - i]) {
            check = false;
            break;
        }
    }
    if (check) {
        alert("Chuỗi đối xứng");
    } else {
        alert("Chuỗi không đối xứng");
    }
}