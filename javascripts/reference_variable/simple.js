//-------mutation is not available for primitive variables---------//

var v1 = 30
var v2 = v1
v1++;
console.log(v2 , v1);





//-----------this program changes the value of an element of an object through refrence--------//
var profile = {
    name: "roshan",
    age: "23"
}

var profileUpdater = (x)=>{
    x.age = 24
}

profileUpdater(profile)

console.log(profile)