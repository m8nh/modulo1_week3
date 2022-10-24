alert('Nhập 10 số nguyên bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
array.sort(function (a,b) {
    return b - a;
})
document.write(array);