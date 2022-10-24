let n = +prompt('Nhập kích thước của mảng :')
let array = [];
for (let i=0; i<n; i++) {
    array.push(prompt('Nhập ký tự bất kỳ:'));
}
console.log(array);
for (let i in array) {
    if (array[i] == '-') {
        array[i] = '_';
    }
}
document.write(array);