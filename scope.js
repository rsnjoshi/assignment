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
