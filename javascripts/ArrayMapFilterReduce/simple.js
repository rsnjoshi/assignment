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





