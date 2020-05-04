//-----------------little complex example-------------------------//
//--------------fetching github users info from api---------------//

var fetch = require('node-fetch')

async function extractor(username){
    const url = 'https://api.github.com/users/' + username;
    let promise = fetch(url);
    let checkpoint = await promise;
    let githubUser = await checkpoint.json();

    return githubUser;
}

extractor('rsnjoshi')
    .then((response)=>{
        console.log(response);
        console.log(" ");
        console.log("Dear", response.name);
        console.log(" ");
        console.log("You are from ", response.location, ". You have total", response.followers, "followers and you are following", response.following);
        console.log(". Your account was created at", response.created_at);
        console.log(" ");
        console.log("you work in ", response.company);
        console.log(" ");
        console.log("your blog: ", response.blog);
        console.log(" ");
        console.log("your bio: ", response.bio);
        console.log("your id: ", response.id);
        console.log(" ");
        console.log("Thank you");
        console.log("Laptop");
        console.log(" ");
    })