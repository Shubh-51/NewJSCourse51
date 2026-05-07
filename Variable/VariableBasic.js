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

/* Perfer not two use var
because of block scope and function scope issues.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);    
