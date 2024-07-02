function calculateSquare(x){ //here x is parameter
    return x*x;
}

function multiply(x, y=2){
    return x*y;
}

function addElements([num1, num2, num3]){
    return num1+num2+num3;
}

// console.log(calculateSquare(10));
// console.log(multiply(9));

// let arr = [1, 2, 3,4];
// console.log(addElements(arr));

//function with unlimited number of parameters

function sumofallparameter(x,y){
    let sum = 0;
    console.log(x, y);
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sumofallparameter(1,2,3,4,5));