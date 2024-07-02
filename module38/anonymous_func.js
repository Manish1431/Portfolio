let x = function (){
    console.log("unnamed function");
}

x();

//IIFE
(function (name) {
    console.log("greetings",name);
})("sanket");