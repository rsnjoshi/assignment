 //---- simple example---------//
 
 var declare = (cb)=>{
    setTimeout(()=>{
        cb(true, null);
    },2000)
}

declare((err, done)=>{
    if(err){
        console.log("error registered")
    }else{
        console.log("success registered")
    }
})

console.log("second task completed");


