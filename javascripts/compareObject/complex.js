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