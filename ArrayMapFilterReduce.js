//---------- simple example--------------------------//

var arr1 = new Array();

arr1 = [
    {
        name: "roshan",
        surname: "joshi"
    },
    {
        name: "sajal",
        surname: "shrestha"
    }
]

var arr2 = arr1.map((engineer) => {
    return engineer.name;
})

console.log(arr2);

var var1 = arr1.filter((engineer) => {
    return engineer.surname === "shrestha";
})

console.log(var1);


var var2 = arr1.reduce((accumulator, current) => {
    return accumulator.name + current.name
})

console.log(var2)





//------------little complex-------------------//

var laptops = [
    {
        name: "Lenovo",
        model: "G40-80",
        price: 54000
    },
    {
        name: "HP",
        model: "notebook",
        price: 64000
    },
    {
        name: "Dell",
        model: "LATITTUDE 7400",
        price: 120000
    },
    {
        name: "Dell",
        model: "gaming",
        price: 200000
    },
    {
        name: "Lenovo",
        model: "Y50",
        price: 160000
    }
]

var findDell = () => {
    return laptops.filter((laptop) => {
        return laptop.name === "Dell";
    })
}

var availableModels = () => {
    return laptops.map((laptop) => {
        return laptop.model;
    })
}

var affordables = () => {
    return laptops.filter((laptop) => {
        return laptop.price <= 150000;
    })
}

var allStockPrice = () => {
    return laptops.map((laptop) => {
        return laptop.price;
    }).reduce((accumulator, current) => {
        return accumulator + current;
    })
}


console.log(allStockPrice());

console.log(findDell());

console.log(availableModels());

console.log(affordables());