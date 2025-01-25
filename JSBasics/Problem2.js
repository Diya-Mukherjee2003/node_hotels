var prompt = require('prompt-sync')();
var length=prompt("Enter length:")
var width=prompt("Enter width");
function area(length,width){
    return length*width;
}
var ar=area(length,width);
console.log("Area of the rectangle:"+ar)