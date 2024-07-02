function myFirstFunction() {
    //all the logic goes insisde the pair of curly braces
    console.log("This is ");
    console.log("My first Function");
}

myFirstFunction();
myFirstFunction();

function isEvenOrOdd(x) { //it takes a value x and tells whether it is even or odd?
        //x->parameter
    if (x % 2 == 0) {
        console.log("even");
        
    } else {
        console.log("odd");  
    }
}
isEvenOrOdd(16); //12->arguments
isEvenOrOdd(11); //12->arguments
isEvenOrOdd(1); //12->arguments
isEvenOrOdd(17); //12->arguments

function addFourNumbers(a, b, c, d){
    // 4 parameters passed, a,b, c, d
    let result = a+ b + c + d;
    // console.log(result);
    return result; //1.terminates the function, 2. gives an output from the function
}

let y1 = addFourNumbers(10,11,12,13)//4 arguments passed
let x1 = addFourNumbers(1,2,3,4);//4 arguments passed
console.log(x1, y1);

multiply(x1, y1);

 function multiply(x,y){
    //multiply two numbers
    console.log(x*y);
}

function mySecondfunction(){
    return 'This value is returned from a function'
}

const str = mySecondfunction();
console.log(str);

