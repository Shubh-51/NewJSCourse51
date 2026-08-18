const score=100;
//console.log(score);
//const balance=new Number(500);
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));
//console.log(balance.toPrecision(2));

//const num = 1234567;

//console.log(num.toPrecision(3));

const num = 1237897
console.log(num.toPrecision(3));//1.24e+6

// toPrecision(n) → Returns a string with exactly n significant digits.
// It counts important digits from the first non-zero digit.
// If needed, it rounds based on the next digit.
// For very large/small numbers, it may use scientific notation.

// Example:
const num3 = 1234567;

console.log(num3.toPrecision(3));
// "1.23e+6"  → 1.23 × 10^6 = 1,230,000

// 1234567 → keep 3 significant digits: 1, 2, 3
// Next digit = 4 (< 5), so no rounding.

// Another example:
console.log((1299567).toPrecision(3));
// "1.30e+6"  → 1,300,000
// Keep 1,2,9 → next digit is 9, so 129 rounds to 130.


// toPrecision(n) → Returns a STRING with n significant digits.
// It counts digits from the first non-zero digit.
// If the next digit is >= 5, it rounds up.
// It may use scientific notation for very large/small numbers.

// Decimal example:
const num2 = 123.4567;

console.log(num2.toPrecision(4));
// "123.5"
// Keep 4 significant digits: 1, 2, 3, 4
// Next digit = 5 → round 4 up to 5.

// Another example:
console.log((12.3456).toPrecision(3));
// "12.3"
// Keep 3 significant digits: 1, 2, 3
// Next digit = 4 → no rounding.

// Round-off example:
console.log((12.356).toPrecision(3));
// "12.4"
// Keep 3 significant digits: 1, 2, 3
// Next digit = 5 → 3 rounds up to 4.

//==========================================******************************=============================================
const hundreds = 100000000;

console.log(hundreds.toLocaleString()) //the result depends on your system/browser locale.
//console.log(hundreds.toLocaleString('EN-IN')) 


