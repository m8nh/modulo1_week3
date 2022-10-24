alert('Nhập mảng a gồm 10 ký tự:')
let arrayA = [];
for (let i=0; i<10; i++) {
    arrayA.push(prompt('Nhập ký tự bất kỳ:'));
}
console.log(arrayA);
alert('Nhập mảng b gồm 10 ký tự:')
let arrayB = [];
for (let i=0; i<10; i++) {
    arrayB.push(prompt('Nhập ký tự bất kỳ:'));
}
console.log(arrayB);
let flag = true;
for (let i=0; i<10; i++) {
    if (arrayA[i] != arrayB[i]) {
        flag = false;
        break;
    }
}
if (flag != true) {
    alert('Mảng a và b khác nhau.');
}
else {
    alert('Mảng a và b giống nhau.');
}