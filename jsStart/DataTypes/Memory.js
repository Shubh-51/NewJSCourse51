//Stack Memory and Heap Memory
//all premative data types are stored in stack memory 
// and all reference data types are stored in heap memory

let number=10; //stored in stack memory
let number2=number; //stored in stack memory
console.log(number); //10
console.log(number2); //10

//in statck memory, when we assign a variable to another variable, 
// it creates a copy of the value.

let obj1={
    email:"shubhswat@gmail.com",
    upiId:"shubhswat@okaxis",
}
let obj2=obj1; //stored in heap memory
obj2.email="shubhswatlove@gmail.com";
//changing the value of obj2 will also change the value of obj1
//  because both obj1 and obj2 are pointing to the same object in heap memory.
console.log(obj1.email);
console.log(obj2.email);
