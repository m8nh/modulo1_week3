alert('Nhập mảng a gồm 10 số nguyên bất kỳ')
let a = [];
for (let i=0; i<10; i++) {
    a.push(+prompt('Enter a number:'))
}
console.log(a);

alert('Nhập mảng b gồm 10 số nguyên bất kỳ')
let b = [];
for (let i=0; i<10; i++) {
    b.push(+prompt('Enter a number:'))
}
console.log(b);

let c = [];
c = b.concat(a);
document.write(c);