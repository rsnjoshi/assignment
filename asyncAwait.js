
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





//-----------------little complex example-------------------------//

var fetch = require('node-fetch')

async function extractor(username){
    const url = 'https://api.github.com/users/' + username;
    let promise = fetch(url);
    let checkpoint = await promise;
    let githubUser = await checkpoint.json();

    return githubUser;
}

extractor('facebook')
    .then((response)=>{
        console.log(" ");
        console.log("Dear", response.name);
        console.log(" ");
        console.log("You are from ", response.location, ". You have total", response.followers, "followers and you are following", response.following, ". Your account was created at", response.created_at);
        console.log(" ");
        console.log("your blog: ", response.blog);
        console.log(" ");
        console.log("Thank you");
        console.log("Laptop");
        console.log(" ");
    })