// Day 1

//1. Write a condition that returns true for == but not === and explain why
if(3 == "3") {
    return true;
}
else {
    return false;
}
if(3 === "3") {
    return true;
}
else {
    return false;
}
//"==" for comparing values and "===" for comparing values and datatype 

// 2. Write a single if condition that returns true if x is greater than or equal to 10 and is even, or if x is less than 10 and is odd
if((x >= 10 && x % 2 == 0) || (x < 10 && x % 2 != 0)) {
    return true;
}

// 3. Use a ternary operator to assign 'odd' or 'even' to a variable called 'output' by checking if a variable 'x' is odd or even
let x = 5;
const output = x % 2 != 0 ? "odd" : "even";
console.log(output);

// 4. Using if/else if/else write a program that takes an input x (1-7) and prints corresponding weekday (1-Sunday etc).  If input is invalid print invalid input.
if(x == 1) {
    console.log("Sunday");
}
else if(x == 2) {
    console.log("Monday");
}
else if(x == 3) {
    console.log("Tuesday");
}
else if(x == 4) {
    console.log("Wednesday");
}
else if(x == 5) {
    console.log("Thursday");
}
else if(x == 6) {
    console.log("Friday");
}
else if(x == 7) {
    console.log("Saturday");
}
else {
    console.log("invalid input");
}

// 5. Solve question 4 using switch case
let day = 1;
switch(day) {
    case 1: console.log("Sunday");
    break;
    case 2: console.log("Monday");
    app.js
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
    break;
    case 5: console.log("Thursday");
    break;
    case 6: console.log("Friday");
    break;
    case 7: console.log("Saturday");
    break;
    default : console.log("invalid input");
    break;
}

// 1. What is difference between Function Declaration and Function Expression?
// Function declaration are hoisted whereas function expressions are not hoisted.

// 2. Write down the syntax rules of an Arrow function.
// For zero or multiple parameters, parenthesis are required.
// For single parameter, parenthesis and return statements are required.

// 3. Using Function Declaration create a function which will add two numbers.
function add(a,b) {
    return a+b;
}

console.log(add(5,4));

// 4. Using Function Expression create a function which will multiply two numbers.
const multiply = function(a,b) {
    return a * b;
};

console.log(multiply(2,3));

// 5. Using Arrow Function create a function to subtract two numbers.
const sub = (a,b) => {
    return a-b;
};

console.log(sub(34,21));

// 6. Create IIFE which will accept a string as argument and return the reversed string.
const reverseString = str => {
    let arr = str.split("");
    let rev = arr.reverse();
    return rev.join("");
}

console.log(reverseString("String"));