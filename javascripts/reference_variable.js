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






//------------this program changes the content of an array using reference of it-----------------//

var experiment_Array = new Array();

for(let i = 1; i < 10; i++){
    experiment_Array.push(i);
}


console.log("first value of array ===> ",  experiment_Array);


var ref_Array = experiment_Array;

var changeArray = (x)=>{
    var array_length = x.length;
    for(let i = 0; i < array_length; i++){
        ref_Array.shift(i);
    }

    for(let i = 11; i < 20; i++){
        ref_Array.push(i);
    }
}

changeArray(ref_Array);
console.log("after the change through refrence =====> ", experiment_Array);


