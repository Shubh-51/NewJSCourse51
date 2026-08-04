const accountId=1234;

let accountEmail="shubhswat@gmail.com";

var accountPassword="1234";

accountCity="Gurugram"; //this is not a good practice.
let accountState; //undefined

//accountId=4321; //error because accountId is a constant variable(not Alloowed)

accountEmail="shubhswat12@gmail.com";
accountPassword="5678";
accountCity="Delhi";
console.log(accountId);

/* Perfer not to use "var"
because of block scope and function scope issues.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);    


//IN javascript we have 3 types of variable declaration keywords: var, let and const.

//var is function scoped and can be re-declared and updated.[important that var can be re-declared and updated, which can lead to unexpected behavior if not used carefully. It is generally recommended to avoid using var and use let or const instead.]
//let is block scoped and can be updated but not re-declared.
//const is block scoped and cannot be updated or re-declared.

//In javascript we can declare a variable without using any keyword[means const or let], but it is not recommended as it creates a global variable and can lead to unexpected behavior.


//In javascript, we can declare a varible without initializing it, and it will have the value of undefined. We can also initialize a variable at the time of declaration or later in the code.