let a = prompt('Nhập vào ký tự bất kỳ:');
checkNumber();
function checkNumber() {
    let flag = true;
    if ((a>=0)||(a<0)) {
        alert(`True`);
    }
    else {
        alert(`False`);
    }
}