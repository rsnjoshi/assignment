//--------simple examples--------------//
//promise has three state
/*
    1. pending state
    2. onfulfilled state
    3. onRejection
    4. settled
*/

//promise has three methods
/**
    then
    catch
    finally
*/

var function1 = () => {
    var prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello world");
            resolve('executed');
        }, 3000)
    })
    return prom;
}

result = function1();

result
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("settled")
    });


//-----more practical example---------//
const fs = require('fs');

var promise = new Promise((resolve, reject) => {
    fs.readFile('abcd.txt', 'utf-8', (err, value) => {
        if (err) {
            reject(err);
        } else {
            resolve(value);
        }
    })
})

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("resolved")
    })


//----little complex------------------//

const fetch = require('node-fetch')

let urls = [
    'https://www.youtube.com',
    'https://www.github.com',
    'https://javascript.info/async-await'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
 

 Promise.all(requests)
  .then((responses)=>{
    responses.forEach((response)=>{
        console.log(response)
    })
  })
