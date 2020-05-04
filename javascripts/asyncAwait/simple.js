
//------- simple example------------------//



async function example(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('1')
        },2000)
    })

    let condition = await promise;

    console.log("yaha bata muni chaldaina yo function bhitrako.. resolve bhayepaxi matrai chalxa");
    
    return condition;
}

example()
    .then((data)=>{
        console.log(data)
    })
    .finally(()=>{
        console.log("setlled")
    })


