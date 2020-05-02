// let us take an example below

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




