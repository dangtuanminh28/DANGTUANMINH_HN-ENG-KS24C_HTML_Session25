let str = prompt("Nhập chuỗi:");
alert(titleCase(str));

function titleCase(str) {
    str = str.toLowerCase();
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}