alert('Nhập 10 số bất kỳ')
let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let max = array[0];
let tong = array[0];
for (let i=1; i<array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
    tong = tong + array[i];
}
let tb = tong / 10
alert(`${max} là số lớn nhất`);
alert(`Giá trị trung bình là: ${tb}`);