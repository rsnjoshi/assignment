// simple example

var a = 30;

function calculate() {
    var b = 20;

    var add = () => {
        var c = 30;        // variable b and a are accessable to function add where as variable c is not accessable to function calculate
        console.log(a + b + c);
    }
    add();
}

calculate();


