

###### DIfference between function argument and parameter with example
###### Explain concatenation with example



### Difference between Function Argument and Parameter

Function arguments are expressions used when calling the function.
Function arguments are the values received by the function when it is invoked while parameters are part of the function definition. Function parameters are listed inside the parentheses () in the function definition. An Example explaining function argument and function parameter is 

#### JavaScript

```javascript

function doMath(firstNumber, secondNumber, string){
if (string === 'multiply') {
const productOfNumbers = firstNumber * secondNumber
return productOfNumbers 
const num = add(10, 10); 

```

The Function Parameters in the above line of code are the firstNumber, secondNumber and string which are the listed items within the parenthesis while the function arguments are the numbers 10, 10 which are variables that are already declared and are the values received by the function when it is invoked.


### concatenation Explanation with Examples

concatenation in JavaScript is a method used to join two or more strings together. When you concatenate a number with a string, the number becomes a string There are two ways of Concatenating Strings in Javascript: 
Using the "+" operator and Using the concat() method 

For concatenation Using the "+" operator, JavaScript directly adds two String literals. e.g 

#### JavaScript

```javascript

let myAge = 35;
console.log("I am " + myAge + " years old.");
// I am 35 years old.

```

Using the concat() method

It is denoted as concat() and what this method does is that it doesn't change the existing strings, but returns a new string containing the text of the joined strings.
The concat() method is also used to join two or more arrays.
Example using the concat() method is

#### JavaScript

```javascript

var strone = "Tea and ";
  var strtwo = "Bread!";
  var strthree = " Makes a Nice Breakfast!";
  var res = strone.concat(strtwo, strthree);

```