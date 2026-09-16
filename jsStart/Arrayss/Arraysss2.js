const marvel_heroes=["Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye"];

const dc_heroes=["Superman","Batman","Wonder Woman","Flash","Green Lantern","Aquaman"];

//marvel_heroes.push(dc_heroes); 
//add dc_heroes array at the end of marvel_heroes array
//console.log(marvel_heroes); 

//const all_heroes=marvel_heroes.concat(dc_heroes);
//we store the concatenated array in a new variable all_heroes 
// because concat() method does not change the existing arrays 
// but instead returns a new array.
//console.log(all_heroes);

//spread operator(...) is used to expand an array into individual elements.
//const all_heroes=[...marvel_heroes,...dc_heroes];
//console.log(all_heroes);

const arr=[1,2,3,[1,2,3],4,5,[6,7,[1,2,3,[1,2,3 ]]]];
console.log(arr.flat(Infinity)); 
//flat(Infinity) 
// method creates a new array with all sub-array 
// elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("ShubhSwat"));   
console.log(Array.from ("ShubhSwat"));
console.log(Array.from ({name:"ShubhSwat"}));
//Array.from() method creates a new, 
// shallow-copied Array instance from an array-like or iterable object.
const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));

// Difference between Array.from() and Array.of()
//
// Array.from()
// → Creates an array FROM an iterable or array-like object.
//
// Example:
console.log(Array.from("CRICKET"));
// ["C", "R", "I", "C", "K", "E", "T"]

console.log(Array.from({ length: 3 }, (_, i) => i + 1));
// [1, 2, 3]
//
// Think: "Convert something INTO an Array"


// Array.of()
// → Creates an array FROM the given arguments.
//
// Example:
console.log(Array.of(10, 20, 30));
// [10, 20, 30]

console.log(Array.of(5));
// [5]
//
// Think: "Put these values INTO an Array"


// IMPORTANT difference with one number:
Array(5);
// [empty × 5] → creates an array with length 5

Array.of(5);
// [5] → creates an array containing the value 5


// Easy way to remember:
//
// Array.from(value) → Convert FROM something to Array
// Array.of(value1, value2) → Create Array OF these values




