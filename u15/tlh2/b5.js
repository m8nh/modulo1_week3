let a = +prompt('Nhập vào số nguyên a:');
let b = +prompt('Nhập vào số nguyên b:');
let c = +prompt('Nhập vào số nguyên c:');
minNumber();
function minNumber() {
    if (a<b) {
        if (a<c) {
            alert(`${a} là số nhỏ nhất`);
        }
        else {
            alert(`${c} là số nhỏ nhất`)
        }
    }
    else if (b<c) {
        alert(`${b} là số nhỏ nhất`)
    }
    else {
        alert(`${c} là số nhỏ nhất`)
    }
}