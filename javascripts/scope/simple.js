//---- simple example------------//
var num1 = 30;
var num2 = 40;

function adder(){
    var temp1 = num1;
    var temp2 = num2;
    function calculate(){
        var result = temp1+temp2;
        console.log(result);
    }

    calculate();

}

adder()
