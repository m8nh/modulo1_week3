let a= +prompt('chdt')
let pi = Math.PI
chuvi();
dientich();
function chuvi() {
    let chuvi = 2*r*pi;
    alert(`Chu vi hình tròn bán kính ${r}(cm) là: ${chuvi}(cm)`);
}
function dientich() {
    let dientich = (r**2)*pi;
    alert(`Diện tích hình tròn bán kính ${r}(cm) là: ${dientich}(cm2)`);
}