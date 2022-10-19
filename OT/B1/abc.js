function getTriangleType(a,b,c) {
    return (a === b && b === c) && 'equilateral' ||
        (a === b || a === c || b === c) && 'isosceles' ||
        'scalene';
var a = +prompt("cm cua a")
var b = +prompt("cm cua b")
var c = +prompt("cm cua c")
    alert(getTriangleType());
}
