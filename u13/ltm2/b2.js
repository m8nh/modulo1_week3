let array = [];
for (let i=0; i<10; i++) {
    array.push(prompt('Nhập ký tự bất kỳ:'));
}
console.log(array);
let x = 0;
let y = array.length - 1;
while (x < y) {
    let a = array[x];
    array[x] = array[y];
    array[y] = a;
    x++;
    y--;
}
document.write(array);