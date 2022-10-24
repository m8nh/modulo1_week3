alert('Nhập vào 1 mảng gồm 10 số bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let i = 0;
let j = array.length - 1;
while (i<j) {
    let a = array[i];
    array[i] = array[j];
    array[j] = a;
    i++;
    j--;
}
document.write(array);