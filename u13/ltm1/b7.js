alert('Nhập 10 số nguyên bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let v = +prompt('Nhập vào 1 số nguyên V:');
for (let i=0; i<array.length; i++) {
    if (v === array[i]) {
        for (let j = i; j<array.length; j++) {
            array[j] = array[j+1];
        }
    }
}
document.write(array);