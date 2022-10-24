alert('Nhập 10 số nguyên bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let v = +prompt('Nhập vào 1 số nguyên V:');
let flag = true;
for (let i=0; i<array.length; i++) {
    if (v === array[i]) {
        alert(`${v} nằm trong mảng.`);
        flag = true;
        break;
    }
    else flag = false;
}
if (flag === false) {
    alert(`${v} không nằm trong mảng`);
}