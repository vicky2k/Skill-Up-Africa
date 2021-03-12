console.log("my name is victor okeke");
console.log("This is a JavaScript Program whose function expects three arguments when called. To Modify Program Output, change String in last line to sum, multiply or divide");

function add(numone, numtwo, add)
{
   return numone + numtwo ;
}
const num = add(3, 5) ;
console.log("The addition of the first two arguments is: " + num);
function arith(numone, numtwo, string){   
if (string === "sum")
{
return numone + numtwo ;
}
else if (string === "divide")
{
return numone/numtwo ;
}
else if (string === "multiply")
{
return numone * numtwo ;
} else 
{console.log("please make a right input")}
}
console.log(arith(3,5, 'multiply'));
