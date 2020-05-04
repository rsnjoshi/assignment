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