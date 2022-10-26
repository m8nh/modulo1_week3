function isPalindrome() {
    let word = prompt('Nhập từ kiểm tra đối xứng:');
    let str = word.toString();
    console.log(str);
    let flag = true;
    if (str[0] == str[str.length-1]) {
        flag = true;
        for (let i=1; i<=((str.length)/2); i++) {
            if (str[i] == str[str.length-1-i]) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
    }
    else {
        flag = false;
    }
    alert(flag);
}
isPalindrome()