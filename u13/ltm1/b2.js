let array = [];
for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
console.log(array);
let max = array[0];
let j = 0
for (let i=1; i<array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        j = i;
    }
}
alert(`${max} là số lớn nhất, nằm ở vị trí ${j}`);