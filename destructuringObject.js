var employee = new Object();

employee = {
    name: "roshan joshi",
    address: "hattisar",
    age: "23"
}

var {name, address, age} = employee;

console.log(address);



////---------------------little advanced-------------------------------//

var carArray = new Array();
carArray =  [
    {
        name: "Ferari Enzo",
        model: "F60",
        engine: "F140",
        price: "1.2 million"
    },
    {
        name: "Lamborghini aventador",
        model: "S10",
        engine: "V12",
        price: "3.2 million"
    },
    {
        name: "Porsche cayman",
        model: "CS",
        engine: "CAY1S",
        price: "2.2 million"
    },
    {
        name: "Ford mustang",
        model: "M14",
        engine: "V8",
        price: "2.1 million"
    },
    {
        name: "Mercedes Benz",
        model: "GLS 450",
        engine: "DOHC",
        price: "1.1 million"
    },
    {
        name: "Volkswagen Golf",
        model: "GTE",
        engine: "V8",
        price: "1.2 million"
    }
]


var showAll = ()=>{
    for (car of carArray){
        var {name, model, engine, price} = car;
        console.log(name + " of model no: " + model + " with " + engine + " engine costs " + price + " US dollars!");
        console.log(" ");
    }
}

showAll();