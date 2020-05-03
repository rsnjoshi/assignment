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




//----------------------------- a descriptive visualization
//------------------------- program to find duplicate object in an array

var objArray = new Array();

objArray = [
    {
        name: "kiran",
        gender: "male"
    },
    {
        name: "kiran",
        gender: "female"
    },
    {
        name: "ram",
        gender: "male"
    },
    {
        name: "kiran",
        gender: "male"
    },
    {
        name: "ram",
        gender: "male"
    },
    {
        name: "kiran",
        gender: "male"
    },
    {
        name: "kiran",
        gender: "female"
    },
    {
        name: "ram",
        gender: "male"
    },
    {
        name: "kiran",
        gender: "male"
    }
]

console.log(objArray);


var duplicateDetector = ()=>{
    var dupCounter = new Array();
    for(var i = 0; i < objArray.length; i++){
        var flag = false;
        var counter = 0;
        var newObj = new Object();
        var tempObj = objArray[i];
        
        for(var j = i+1; j < objArray.length; j++){
            var tempObj2 = objArray[j];
            if(JSON.stringify(tempObj) === JSON.stringify(tempObj2)){
                if(!flag){
                    newObj.obj = tempObj;
                    flag = true;
                }
                counter++;
                newObj.duplicates = counter;
                objArray.splice(j, 1);
                j--;
            }
        }
        if(flag){
            dupCounter.push(newObj);
        }
    }
    console.log(dupCounter);
}

duplicateDetector();


