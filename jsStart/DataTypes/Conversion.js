//Conversions in JavaScript
let score1=100

console.log(typeof score1); //number
console.log(typeof(score1)); //number

let scoreString1="120";
console.log(typeof scoreString1); //string

//coverting String to Number
let scoreInNumber=Number(scoreString1);
console.log(typeof scoreInNumber); //number

let scoreString2="100abc";
console
let scoreInNumber2=Number(scoreString2);//NaN
console.log(scoreInNumber2);

let scoreString3=null;
let scoreInNumber3=Number(scoreString3);
console.log(typeof scoreInNumber3); //number
console.log(scoreInNumber3); //0 Null is converted to 0 when converted to a number

let scoreString4=undefined;
let scoreInNumber4=Number(scoreString4);
console.log(typeof scoreInNumber4); //number
console.log(scoreInNumber4); //NaN Undefined is converted to NaN when converted to a number 

let scoreString5=true;
let scoreInNumber5=Number(scoreString5);
console.log(typeof scoreInNumber5); //number
console.log(scoreInNumber5); //1 true is converted to 1 when converted to a number

let scoreString6="hitesh";
let scoreInNumber6=Number(scoreString6);
console.log(typeof scoreInNumber6); //number
console.log(scoreInNumber6); //NaN "hitesh" is converted to NaN when converted to a number  

//convert many form of data to number
//33===>Number
//"33"===>Number
//"33abc"===>NaN
//null===>0
//undefined===>NaN
//true===>1
//false===>0

//==============================================================================
let loggedIn=1;
let loggedInStatus=Boolean(loggedIn);
console.log(loggedInStatus); //true

let loggedIn2="";
let loggedInStatus2=Boolean(loggedIn2);
console.log(loggedInStatus2); //false  empty string is converted to false when converted to boolean 

let loggedIn3="hitesh";
let loggedInStatus3=Boolean(loggedIn3);
console.log(loggedInStatus3); //true non empty string is converted to true when converted to boolean

let loggedIn4=0;
let loggedInStatus4=Boolean(loggedIn4);
console.log(loggedInStatus4); //false 0 is converted to false when converted to boolean

//1==>true
//0==>false
//""==>false
//"hitesh"==>true
//null==>false
//undefined==>false

let loggedIn5=null;
let loggedInStatus5=Boolean(loggedIn5);
console.log(loggedInStatus5); //false null is converted to false when converted to boolean

let loggedIn6=undefined;
let loggedInStatus6=Boolean(loggedIn6);
console.log(loggedInStatus6); //false undefined is converted to false when converted to boolean

//==============================================================================
let score15=100;
let scoreString15=String(score15);
console.log(typeof scoreString15); //string
