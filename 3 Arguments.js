console.log("my name is victor okeke");
console.log("this is a javascript program whose function expects 3 arguments when called");

function add(_num1, _num2, add)
{
   return _num1 + _num2 ;
}
var num = add(3, 5) ;
console.log("The addition of the first two arguments is: " + num);
function arith(num1, num2, string){   
if (string === "sum")
{
return num1 + num2 ;
}
else if (string === "divide")
{
return num1/num2 ;
}
else if (string === "multiply")
{
return num1 + num2 ;
} else 
{console.log("please make a right input")}
}
console.log(arith(3,5, 'multiply'));