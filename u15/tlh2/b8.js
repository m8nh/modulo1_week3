daonguoc();
function daonguoc() {
    let n = +prompt('Nhập vào kích thước mảng:');
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(+prompt('Nhập vào 1 số nguyên:'));
    }
    let reverseArray = [];
    for (let j = (n - 1); j > -1; j--) {
        reverseArray.push(array[j]);
    }
    alert(reverseArray);
}