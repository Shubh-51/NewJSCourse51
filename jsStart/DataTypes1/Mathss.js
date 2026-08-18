//console.log(Math.abs(-5)); // 5
//console.log(Math.abs(5));  // 5
//console.log(Math.round(4.7)); // 5
//console.log(Math.round(4.4)); // 4
//console.log(Math.floor(4.7)); // 4
//console.log(Math.ceil(4.4));  // 5

//console.log(Math.max(4, 7, 1, 9, 3)); // 9      
//console.log(Math.min(4, 7, 1, 9, 3)); // 1

//console.log(Math.random()); // Generates a random number between 0 (inclusive) and 1 (exclusive)
const randomNum = Math.floor(Math.random() * 10) + 1; 
// Generates a random integer between 1 and 10  (inclusive)
console.log(randomNum);
//const randomNum2 = Math.floor(Math.random() * 100) + 1;
// Generates a random integer between 1 and 100
//console.log(randomNum2);

// Generate a random integer between min and max (both inclusive)

// Formula:
Math.floor(Math.random() * (max - min + 1)) + min;

// Example:
const min = 5;
const max = 10;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Possible results: 5, 6, 7, 8, 9, 10

// How it works:
// 1. (max - min + 1) → calculates how many numbers are in the range
// 2. Math.random() * range → generates a value from 0 up to range (excluding range)
// 3. Math.floor() → converts it to 0, 1, 2, ... range-1
// 4. + min → shifts the result to start from min
//
// Example: 5–10 → range = 10 - 5 + 1 = 6
// floor(random * 6) → 0–5
// + 5 → 5–10