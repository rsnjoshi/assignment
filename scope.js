//---- simple example------------//


var mango = "sweet and tasty";          // global variable
var apple = "swwet and crunchy";

function display(fruit){
    var string = " fruit is ";      // local variable
    console.log("this" + string + fruit);
    function info(string2){
        var string3 = "my favourite";
        console.log(string2 + string3); // local variable inside info function
    }
    info(string);
}

//console.log(string);  ///no access for string variable here

display(mango);
display(apple);




//-------little complex example------------------//


var num1 = 30;
var num2 = 40;

function adder(){
    var temp1 = num1;
    var temp2 = num2;
    function calculate(){
        var result = num1 + num2;
        console.log(temp1 + temp2);
    }

    calculate();

}

adder()




