console.log("3 Different Functions that do 3 Different Things")
console.log("First Function")

//A Function that adds a value to an any argument passed to it
var num = 10;

function increase(value)
{
  value++;
  console.log("value is " + value);
}
increase(num);
console.log("num is " + num); 
console.log("num is: "+ num);

console.log("Second Function")

//An Example of a Javascript Conditional If..Else statement that displays the Four Category options of an Online Competition 
const opt = 4
if (opt === 1) {
console.log("You are in Category 1- My Big Idea Business Challenge. Enter For A Chance To Win ₦100,000 ")
} else if (opt === 2) {
console.log("You are in Category 2- My Business Support Challenge. Enter For A Chance To Win ₦250,000 ")
} else if (opt === 3){
console.log("You are in Category 3- My Catalyst Support Challenge. Enter For A Chance To Win ₦500,000")
}
else {
console.log("You are in Category 4- My Bold Innovation Challenge. Enter For A Chance To Win ₦1,000,000")
}

console.log("Third Function")

// A Function that Concatenates two name Strings Together
var firstname = "Chidi";
var surname = "Okeke";

function addName(x, y)
{
   return x +" "+ y;
}
var fullName = addName(firstname, surname);
console.log("Your Full Name is: " + fullName);