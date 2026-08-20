const love=["I", "love", "Swat", "and", "I", "call","her","baby","janu","Darling","Bebo","Sweetu"];

//In javascript arrays are used to store multiple values in a single variable. 
// An array can hold many values under a single name, 
// and you can access the values by referring to an index number.
//also store mutiple data types in an array 
// like string, number, boolean, object, etc.
console.log(love[2]);

const arr=new Array(0,1,2,3,4);  
//console.log(arr[2]);

//Arrays Methods
//const fruits=["Banana","Orange","Apple","Mango"];
//console.log(fruits.length);  let's see the length of the array

//arr.push(5);//add element at the end of the array
//arr.push(6);
//arr.pop();  //remove last element of the array
//console.log(arr);

//arr.unshift(-1); //add element at the start of the array
//unhift() method is very unfit for large arrays because 
// it needs to re-index all the elements in the array after 
// adding the new element at the start.
//console.log(arr);
//arr.shift(); //remove first element of the array
//shift() method is also very unfit for large arrays because 
// it needs to re-index all the elements in the array after 
// removing the first element.
//console.log(arr);

//arr.includes(19); //check if the array includes a certain value
//console.log(arr.includes(19)); //false


//arr.indexOf(0); //return the first index of a certain value
//console.log(arr.indexOf(0)); //0


//arr.reverse(); //reverse the order of the array
//console.log(arr.reverse()); //4,3,2,1,0

//const newArr=arr.join(); //join() method joins all the elements of an array into a string
//console.log(arr);
//console.log(newArr);
//console.log(typeof newArr); //string

//slice() 
// method returns a shallow copy of a portion of an array into 
// a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array. 
// The original array will not be modified.
console.log("A",arr);
arr.slice(1,3); //return a new array from index 1 to 3 (not included)
console.log(arr.slice(1,3));
console.log("B",arr);

//splice()
// method changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements in place.
arr.splice(1,3); //remove 3 elements from index 1
console.log(arr);   
console.log("C",arr);
//how to add elements in an array using splice() method
arr.splice(1,0,1,2,3);
console.log("D",arr);

//============================^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^+++++++++++++++++++++++++++

// splice() → Used to ADD, REMOVE, or REPLACE elements in an array.
// It modifies the original array.

// Syntax for adding:
// array.splice(startIndex, 0, element1, element2, ...);

// Example:
const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 0, "Orange");

console.log(fruits);
// ["Apple", "Orange", "Banana", "Mango"]

// 1 → index where we want to add
// 0 → delete 0 elements
// "Orange" → element to add

// Adding multiple elements:
const numbers = [10, 20, 50];

numbers.splice(2, 0, 30, 40);

console.log(numbers);
// [10, 20, 30, 40, 50]

// Remember:
// splice(index, 0, elements) → ADD elements
// splice() modifies the original array.

//splice(index, 0, elementsToAdd)
//0 means "don't delete anything", so you're only inserting.
