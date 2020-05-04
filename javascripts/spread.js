//simple example

var a = 30;
var b = 20;
var c = 10;

function display(...args){
    console.log(args);
}

display(a, b, c);



//-------------slightly complex------------------//

var adder = (...variables)=>{
    var result = 0;
    for(element of variables){
        result += element;
    }
    console.log(result);
}

var multiplier = (...variables)=>{
    var result = 1;
    for(element of variables){
        result *= element;
    }
    console.log(result);
}

adder(1,2,3,4);
multiplier(2,2,2,2);