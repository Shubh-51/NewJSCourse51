//DataTypes
"use strict";

//In javascript we have 7 primitive data types: string, number, boolean, null, undefined, symbol and bigint.
//We also have 1 non-primitive data type: object.

//====================================================================================
//alert(3+3); //we are using node js not browser, so we cannot use alert function. It is used in browser to display a message to the user.

console.log(3+3);
let name="Shubhswat";
let age=25;
let isStudent=true;
let city=null;
let state;
let symbol=Symbol("symbol");
let bigInt=9007199254740991n;

console.log(typeof name); //string
console.log(typeof null); //object
console.log(typeof state); //undefined
console.log(typeof symbol); //symbol
console.log(typeof 4567894567890567890456789n); //bigint
console.log(typeof age); //number
console.log(typeof isStudent); //boolean

//number===2 to power 53 -1
//bigInt can store numbers greater than number type can store.
//Symbol==>unique
//null==>standalone value
//String===>"" or ''