checkIn();
function checkIn() {
    let n = +prompt('Nhập vào kích thước của mảng:')
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(prompt('Nhập vào một ký tự bất kỳ:'))
    }
    console.log(array);
    let a = prompt('Nhập vào ký tự cần kiểm tra:');
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (a == array[i]) {
            count++
        }
    }
    if (count>0) {
        alert(`${a} xuất hiện ${count} lần trong mảng.`);
    }
    else {
        alert(`-1`);
    }
}