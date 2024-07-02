let arr = [10,11,12,13]

console.log(arr)

arr.push(9); //to add a new element at the last
arr.push(19)

console.log(arr);

arr.pop(); //to remove a element from the last
arr.pop();
console.log(arr);

arr.shift(); //to remove a element from the start
console.log(arr);

arr.unshift(78); //to add a new element at the first 
console.log(arr);

const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];
const res = a1.concat(a2); //to return a new array with elements of a1 followed by elements of a2
console.log(res, a1, a2);

const x = [1, 2, 3, 4, 5, 6, 7];
const s = x.slice(2,6); // to fetch data from start to end-1
console.log(s);

const str = x.join("#");// to club all the elements together to form a string separated by a given character
console.log(str);

const rev = x.reverse();
console.log(rev, x);

const a = [1,2,3,4,5,6,7];
// console.log(a.indexOf(2));

//array.splice(start, deletecount, i1, i2, .....)
const removed = a.splice (2,2,0,0,);
console.log(a,removed);


