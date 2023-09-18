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
// Immediately Invoked Function Expression

const reverseString = str => {
    let arr = str.split("");
    let rev = arr.reverse();
    return rev.join("");
}
console.log(reverseString("String"));

(function(str) {
    let rev = "";
    for(let i=str.length-1; i>=0; i--) {
        rev += str.charAt(i);
    }
    console.log(rev);
}) ("String");

const reversed = (function(str) {
    let rev = "";
    for(let i=str.length-1; i>=0; i--) {
        rev += str.charAt(i);
    }
    return rev;
}) ("Strings");
console.log(reversed);


// Day 2

// For each of the following, try to work out what the output will be. Run the code in the browser console to check your answer.

var a = 12;
(function() {
  console.log(a); // 12
})(); 

var a = 5;
(function() {
  var a = 12;
  console.log(a); // 12
})();

var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    console.log(a); // 12
  });
})();
x();

var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    console.log(a); // 10
  }
})();
x();

var a = 10;
var x = (function() {
  (function() {
    a = 12; // <<< look carefully at this line.
  })();
  return (function() {
    console.log(a); // 12
  });
})();
x();

// var a = 10;
// (function() {
//   var a = 15;
//   window.x = function() {
//     console.log(a); // 10
//   }
// })();
// x();

// 1. Is array passed by value or reference to a function. Justify your answer with an example.
// Array is passed by reference to a function because when we pass to an array to a function and modify the
// array, the changes are visible even outside of the function.

const k = [1, 2, 3, 4, 5];
const c = a => {
    a.push(6);
    return a;
};
c(k);
console.log(k);

// 2. Write a Javascript function to clone an array without using loops.
const p = [1, 2, 3];
let q;
const clone = p => {
    q = p; 
}
clone(p);
console.log(q);

// 3. Breifly explain the below Array methods with examples
// shift, unshit, slice, splice, pop

// shift is used to remove the first element of the array

// unshift is used to add an element at the beginning of the array

// slice is used to get a copy of the array from the given start index(inclusive) to end index(exclusive)
// without modifying the original array

// splice is used to modify the array by adding or removing elements
// it has 3 arguments
// 1. start - index at which add / remove operations are performed
// 2. count - no.of elements are to removed from start index
// 3. items - add the items to array from start index

// pop is used to remove the last element

const m = [0,1,2,3];
const method = m => {
    console.log(m);
    m.shift();
    console.log(m);
    m.unshift(0);
    console.log(m);
    const n = m.slice(1,3);
    console.log(m);
    console.log(n);
    m.splice(1,2,4,5,6);
    console.log(m);
    m.pop();
    console.log(m);
};
method(m);

// 1. Using a for loop output the elements in reverse order [1,2,3,4,5]
arr = [1,2,3,4,5];
for(let i=arr.length; i >= 1; i--) {
    console.log(i);
}

// 2. Whats the difference between for .. of and for .. in
// for .. of is used to iterate through the elements of data structures.
// for .. in is used to iterate through the properties of an object.

// 1. Use map function to return the squares of the items in the below array [2, 4, 6, 8, 10].
arr = [2, 4, 6, 8, 10];
const sqr = arr.map(n => n*n);
console.log(sqr);

// 2. Use filter function array to extract strings from the below array  [1, ""two"", 3, ""four"", 5, ""Six"", 7, ""Eight"", 9, ""Ten""].
arr = [1, "two", 3, "four", 5, "Six", 7, "Eight", 9, "Ten"];
const str = arr.filter(a => {
    return typeof a === "string";
});
console.log(str);

// 3. What are arguments of the reduce function. Use reduce function to return the sum of the items in the array [1, 3, 5, 7, 9].
// Accumulators and currentValue are the arguments of reduce function. 
// Initially accumulator takes value of first element and currentValue takes value of second element.
// If there is another argument in the reduce function, accumulator starts withh the value of second argument.
arr = [1, 3, 5, 7, 9];
const reduced = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(reduced);

// Day 3

// 1. Write a function which takes an object as input and print out its properties
const x = {
    'a': 1,
    'b': 2
};

const fun = obj => {
    for(let k in obj) {
        console.log(`${k}: ${obj[k]}`);
    }
}

fun(x);

// 2. How to delete property 'a' from object x={'a':1,'b':2}
delete x.a;

console.log(x);

// 3. Given x = {a:'1'}; y = x; does changing y.a change x.a? why? (looking for the answer - objects are pass by reference)
const x = {a: '1'};
const y = x;
y.a = 3;

// If we change the value of y.a, x.a value is changed.
// Because both x and y refer to the same memory.

console.log(x);
console.log(y);

// 4. Copy x = {'a':1} to a variable y without creating a reference to x
const x = {'a': 1}
const y = Object.assign({},x);
y.a = 3;
console.log(x);
console.log(y);

// 5. Write a function to check if two objects are equal
const equality = (obj1,obj2) => {
    return typeof obj1 === typeof obj2 && obj1===obj2;
}

console.log(equality(x,y));

// 1. Implement Queue using javascript class. It should have the below methods
//     * enqueue
//     * dequeue
//     * front
//     * isEmpty

class Queue extends Array {
    enqueue (x) {
        super.push(x);
    }
    dequeue () {
        return super.shift();
    }
    front () {
        return this.length === 0 ? -1 : this[0];
    }
    isEmpty () {
        return this.length === 0 ? true : false;
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.front());
console.log(q.isEmpty());

// 2. Explain instanceOf operator with an example.
// instanceOf operator is used to check whether the object is an instance of a particular class
// Every object that is created is an instance of an Object class
// Child class object is also an instance of parent class

class A {
    fun () {
        console.log("Class A");
    }
}
class B extends A  {
    print () {
        console.log("Class B");
    }
}
const b = new B();
console.log(b instanceof B);
console.log(b instanceof A);
console.log(b instanceof Object);

// 1. Solve https://www.hackerrank.com/contests/javascript-week2/challenges/js-callbacks

function myFilter(my_array, callback){
    //Enter your code here
    const arr = [];
    for(num of my_array) {
        if(callback(num)) {
            arr.push(num);
        }
    }
    return arr;
  
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray, num => num%2==0 ? true : false));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});

// Day 4 

// 1. Briefly explain different Promise states.
// Promise has three states.1. Briefly explain different Promise states.
// 1. Pending
// 2. Fulfiled - returns a value
// 3. Rejected - returns a reason

// 2. Using promise to create a delayedLowerCase function which will transform a string to lower case after 5 seconds. Ex Input: ""BEAUTIFUL CODE"" Output: ""beautiful code""
var str = "BEAUTIFUL CODE";
const delayedLowerCase = str => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof str === "string") {
                str = str.toLowerCase();
                console.log(str);
                resolve(str);
            }
            else {
                reject("Please provide a string");
            }
        },5000);
    })
}
delayedLowerCase(str);

// 3. Briefly explain Promise Chaining. For the above created delayedLowerCase function chain a promise which will print the string and its length: Ex: Input: ""Beautiful Code""  Output: ""beautiful code - 14""
// Promise chaining is usesd when there are two or more asynchronous functions that are to be executed,
// where the result of next depends on the result of first function.
// resolve and reject doesn't appear on console instead,
// their values are passed as arguments for then and catch.
delayedLowerCase(str).then((str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(str + " - " + str.length);
            resolve(str);
        },1000);
    })
});

// 1. Rewrite the below using Async-Await syntax

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    })
}

async function getProcessedData(url) {
    try {
        await downloadData(url) // returns a promise
        await processDataInWorker(v)  // returns a promise
    } 
    catch(err) {
        return downloadFallbackData(url)
    }
}