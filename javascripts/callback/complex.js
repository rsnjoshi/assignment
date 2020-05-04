//-------little advanced-----------//
//-----preperation for exam--------//


var getAdmitcard = (callBack)=>{
    var counter = 0;
    var interval = setInterval(()=>{
        callBack(true, null);
        if(counter == 1){
            console.log("got admit card");
            clearInterval(interval);
            callBack(null, true);
        }
        counter++;
    },3000)
}


var study = (callback)=>{
    var counter = 0;
      var interval =  setInterval(()=>{
            console.log("study started");
            callback(true, null);
            if(counter == 2){
                clearInterval(interval);
                callback(null, true);
            }
            counter++;
        }, 3000) 
}


var getStarted = ()=>{
   study((err, success)=>{
       if(err){
        console.log("didn't understand, trying again");
       }else{
        console.log("understood");
        getAdmitcard((err, success)=>{
            if(err){
                console.log("no admit card found")
                console.log("trying again")
            }else{
                console.log("go to exam hall")
            }
        })
       }
   })
}

getStarted();