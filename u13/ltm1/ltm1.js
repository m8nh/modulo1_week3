    let array = [];
    for (let i=0; i<10; i++) {
    array.push(+prompt('Enter a number:'))
}
    console.log(array);
    for (let i = 0; i<array.length; i++) {
    if (array[i] >=10) {
    document.write(array[i]+'</br>');
}
}
