// ------------------------------let us take an example below

// for objects
var obj1 = {
    name: "abc",
    age: 32
}

var obj2 = {
    name: "abc",
    age: 32
}

var obj3 = obj2

console.log(obj1 === obj2);    //false

console.log(obj2 === obj3);   //true

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));   //into JSON string format



// same case for arrays
var arr1 = [0,1,2,3,4,5,6];
var arr2 = [0,1,2,3,4,5,6];

console.log(arr1 === arr2)

console.log(JSON.stringify(arr1) === JSON.stringify(arr2));







