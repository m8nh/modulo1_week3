let a = +prompt('Nhập vào một số bất kỳ:');
checkNguyenduong();
function checkNguyenduong() {
    if (a<=0) {
        alert(false);
    }
    else {
        alert(Number.isInteger(a));
    }
}