//Hello world in Nodejs

console.log(this)

// && ||
// &&-> both side condition should be true
// ||-> even if one side is true, we will get true as result

let isLoggedIn = true
let cardDetails = false

console.log("Allow purchase:", isLoggedIn && cardDetails);

let githubLogin = false
let gmailLogin = true
let twitterLogin = false

console.log ("Allow user to Login:", githubLogin || gmailLogin || twitterLogin);

//conditionals

//If, else, else if, nested if else

let age = 24 

if (age >= 18) {
console.log("You can vote in election");
}

let userDetails;

//userDetails = complexFunctionT0getDetailsfromserver()
console.log(userDetails);
//null and undefined

if(userDetails){
    console.log("User is logged in ");
}
else{
    console.log("Please login first");
}

if(userDetails){
    console.log("Logout");
}
else{
    console.log("Login/signup")
}

//traffic light example

let trafficLight = "red"

if (trafficLight === 'red'){
    console.log("stop ! you have to wait");
}else if (trafficLight === "yellow") {
    console.log('slow down')
}else if (trafficLight === 'green'){
    console.log('you can go now');
}else{
    console.log( "signal is broken, save yourself");
}



// if (trafficLight === 'red'){
//     return gmailLogin()
// }else if (trafficLight === "yellow") {
//     return linkedinlogin()
// }

//1. Userlogin
//2. TAlogin
//3. Facultylogin
//4. Adminlogin

let role = "admin"

switch (role) {
    case "user":
            console.log("you are a normal visitor of website");
            break;
    case "admin":
            console.log("you can do anything on the  website");
            break;
    case "faculty":
                console.log("you can create/delete lectures");
                break;
    case "ta":
                console.log("you can upload lectures");
                break;
            
        default:
            break;
}

let isUserLogginIn = true

isUserLogginIn ? console.log("when value is true") : console.log("when value is false");
