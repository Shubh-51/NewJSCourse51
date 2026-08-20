//Temporal.Now.instant()
//Temporal.Now.plainDateISO()
//Temporal.Now.plainDateTimeISO()
//Temporal.Now.zonedDateTimeISO()

//console.log(Temporal.Now.instant())

let myDate= new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreatedDate= new Date(2024, 0, 10);
//let myCreatedDate= new Date(2024, 0, 10, 10, 30, 15);
//let myCreatedDate= new Date("2024-01-10");
//console.log(myCreatedDate.toLocaleString());

//let timeStamp= Date.now();
//console.log(timeStamp);
//console.log(Math.floor(timeStamp/1000));

let newDate=new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`)


console.log(newDate.toLocaleString('default',{ 
     weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric' 
}));