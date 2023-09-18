// Without callback 
var str, len;
const getString = () => {
    setTimeout(() => {
        str = "beautiful code";
        console.log(`String is ${str}`);
    },3000)
}
const findLength = str => {
    len = str.length;
    console.log(`Length of ${str} is ${len}`);
}
const oddOrEven = len => {
    result = len%2==0 ? "even" : "odd"; 
    console.log(result);
}
getString();
findLength(str);
oddOrEven(len);

// With Callback of hell
var str, len;
const getString = (str, callback) => {
    setTimeout(() => {
        str = "beautiful code";
        console.log(`String is ${str}`);
        callback(str, oddOrEven);
    },1000)
}
const findLength = (str, callback) => {
    setTimeout(() => {
        len = str.length;
        console.log(`Length of ${str} is ${len}`);
        callback(str, len);
    },1000);
}
const oddOrEven = (str, len) => {
    const result = len%2==0 ? "even" : "odd"; 
    console.log(`Length of ${str} is ${result}`);
}
getString(str, findLength);

// Using Pyramid of Doom
var str, len;
const getString = (str, callback) => {
    setTimeout(() => {
        str = "beautiful code";
        console.log(`String is ${str}`);
        callback(str, (str, len)=> {
            oddOrEven(str,len);
        })
    },1000)
}
const findLength = (str, callback) => {
    setTimeout(() => {
        len = str.length;
        console.log(`Length of ${str} is ${len}`);
        callback(str, len);
    },1000);
}
const oddOrEven = (str, len) => {
    const result = len%2==0 ? "even" : "odd"; 
    console.log(`Length of ${str} is ${result}`);
}
getString(str, findLength);

// Using Promises
var str, len;
const getString = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            str = "beautiful code";
            console.log(`String is ${str}`);
            resolve(str);
        },1000);
    })
}
const findLength = str => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            len = str.length;
            console.log(`Length of ${str} is ${len}`);
            if(typeof str == "string") {
                resolve(len);
            }
            else {
                reject("Please provide a string");
            }
        },1000);
    })
}
const oddOrEven = (len) => {
    const result = len%2==0 ? "even" : "odd"; 
    console.log(`Length of ${str} is ${result}`);
}
getString()
    .then(result => findLength(result))
    .then(result => oddOrEven(result));
