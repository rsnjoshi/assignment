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

  Promise.race(requests)
    .then((response)=>{
        console.log(response)
    })
    .finally(()=>{
        console.log("race settled")
    })

    
