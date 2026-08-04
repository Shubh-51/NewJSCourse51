/***************** Conversion Operations ***************** */
let value = 10;
let negvalue = -value;
Console.log(negvalue); // -10

console.log(2+2); // 4 addition
console.log(2-2); // 0 subtraction
console.log(2*2); // 4 multiplication
console.log(2/2); // 1  division
console.log(2%2); // 0 remainder
console.log(2**2); // 4 power   
console.log(2**3); // 8

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Hello World concatenation  
console.log(1+"2")  // 12 string concatenation
console.log(1+2+"3") // 33 string concatenation
console.log("3"+1+2) // 312 string concatenation

console.log(3+4*5%3)// 3+20%3=3+2=5
//BODMOS explaination: BODMAS stands for Brackets, Orders (i.e. powers and square roots, etc.), Division and Multiplication, Addition and Subtraction.
//  It is a rule that defines the order of operations to evaluate a mathematical expression. In the expression 3+4*5%3, we first perform multiplication (4*5=20), 
// then the modulus operation (20%3=2), and finally addition (3+2=5).
// why we perform modulus after multiplication? Because in BODMAS, multiplication and division are performed from left to right, and modulus is considered as a division operation.
console.log(3+4*5%20/5**2) // 3+20%20/25=3+0/25=3+0=3 
/*
first: 4 * 5 = 20
then: 20 % 20 = 0
then: 0 / 25 = 0
finally: 3 + 0 = 3
*/
console.log(+true) // 1
console.log(+false) // 0
console.log(+null) // 0

let num1; num2; num3;
num1=num2=num3=5;

let gameCounter=101;
console.log(++gameCounter); // 102
let gameCounter1=101;
console.log(--gameCounter1); // 100
let gameCounter2=101;
console.log(gameCounter2++); // 101
console.log(gameCounter2--); // 102