//premative data Types Number, String, Boolean, Null, Undefined, Symbol, BigInt

//non premative (Reference) data Types Objects, Array, Functions.
//javascript is a dynamically typed language, 
// which means you don't have to declare the data type of a variable when you create it.
//  The data type is determined automatically based on the value assigned to the variable.

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId); //false

const arr=["apple","banana","orange"];

let obj={
    name:"John",
    age:30,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof id); //symbol
console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof myFunction); //function