let n = +prompt('Nhập kích thước của mảng:')
let array = [];
for (let i=0; i<n; i++) {
    array.push(prompt('Nhập ký tự bất kỳ:'));
}
console.log(array);
let count = 0;
for (let i=0; i<array.length; i++) {
    if ((array[i] >= 0) || (array[i] < 0)) {
        count++;
    }
}
alert(`Trong mảng có ${count} ký tự số.`);