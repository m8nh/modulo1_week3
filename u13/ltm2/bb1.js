let array = [
    [1,2,1,24],
    [8,11,9,4],
    [7,0,7,27],
    [7,4,28,14],
    [3,10,26,7]
]
for (let i=0; i<array.length; i++) {
    document.write(`Row ${i} </br>`)
    for (let j=0; j < array[i].length; j++) {
        document.write('&nbsp&nbsp&nbsp'+ array[i][j] +'</br>');
    }
}