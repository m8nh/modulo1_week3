alert('Nhập 10 số bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let count = 0;
for (let i=0; i<array.length; i++) {
    if (array[i]<0) {
        count++;
        document.write(array[i]+'</br>');
    }
}
alert(`Trong mảng có ${count} số nguyên âm`);