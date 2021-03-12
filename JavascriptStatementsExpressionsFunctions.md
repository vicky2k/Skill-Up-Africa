
###### Explain JavaScript statements with example
###### Explain JavaScript expressions with example
###### What is the difference between statements/expressions?
###### Explain JavaScript functions in your own words

### JavaScript statements

Javascript Statements are Programming Instructions that are carried out by our web browsers to add interactivity to our HTML web Pages. Statements are designed to work independently of any JavaScript object. An Example of a Javascript Statement is a Conditional Switch Statement like one shown below

####JavaScript

```javascript

//An Example of a Javascript switch statement is

const mathOperation = (userone, usertwo, userthree) => {
    switch(true){
        case userthree === "multiply":
            return userone * usertwo
            break;
        case userthree === "divide":
            return userone / usertwo
            break;
        case userthree === "sum":
            return userone + userone
            break;
        default: console.log("please, enter a valid option.")
    }

}
console.log(mathOperation(2,3,"divide")); 

```

Javascript statements can be categorized into  

- Block Statements, 
- Conditional Statements- If, If...Else, Break and Switch Statements
- Loop Statements- For, While and Do While Statements 
- Object Manipulation Statements and 
- Exception Handling Statements- Throw and Try ... Catch Statements.

####Javascript

```javascript
//An Example of a Javascript Conditional If..Else statement

const age = 17
if (age >= 18 && age < 45) {
console.log("User is a youth")
} else if (age > 44) {
console.log("User is a Senior Citizen")
} else {
console.log("User is a Child")
}

```

### JavaScript Expressions

A JavaScript expression is any valid unit of a JavaScript code that resolves to a value. An Example of a Javascript Expression is  b = 2. There are two types of javascript expressions- 
Those that assign value to a variable e.g b = 2 and 
Those that resolve to a value e.g 10 + 15

JavaScript Expressions can be categorized into the following five Types:

- Arithmetic
- String
- Logical
- Primary-Expressions and
- Left-hand-side Expressions

### The difference between Statements and Expressions

Javascript Statements are complete set of program instructions which normally consist of components such as values, operators, identifiers, expressions, keywords and comments. This means that statements can contain expressions while Javascript Expressions as  any valid unit of code that resolves to a value cannot contain statements. Simply put, expressions could be a constituent part of a statement while a statement cannot be a constituent of an expression.

### An Explanation of JavaScript functions in my own words

A JavaScript function is a block of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).

Functions are useful for many reasons. They are containers for script that run only by an event or a call to the function. Therefore, functions do not execute when the browser initially loads and executes the script that is included in the web page.

A function contains the script that has a specific task so you can execute that script and run that task any time.

Functions accept parameters and arguments
parameters are part of the function definition and are listed inside the parentheses () in the function definition while arguments are expressions used when calling the function i.e the values received by the function when it is invoked. Arguments are usually placed inside curly brackets: {}
A Javascript Function stops executing when it reaches a return statement to compute a return value which is "returned" back to the "caller"



