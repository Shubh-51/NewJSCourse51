//Singleton Object
//object.create()

const mySym=Symbol("key1");

//Object literal
const jsUser = {
    name: "ShubhSwat",
    "full name": "Shubh Swat lover",
    age: 22,
    location: "Gurugram",
   // mySym: "myKey",
   [mySym]: "myKey2",
    email: "shubhswat@example.com",
    isLoggedIn: false,
    lastLoginDays: ["sun", "mon", "tue"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
//console.log(jsUser["mySym"]); 
//console.log(typeof jsUser["mySym"]);

console.log(jsUser[mySym]);

jsUser["email"] = "newemail@example.com";
console.log(jsUser["email"]);
console.log(jsUser);
//Object.freeze(jsUser); //freeze the object

jsUser["email"] = "swatnamrata@love.com"; //cannot change the value of email after freezing the object
console.log(jsUser["email"]);

jsUser.greeting = function () {
    console.log("Hello User");
}
//console.log(jsUser.greeting);
console.log(jsUser.greeting());
jsUser.greeting2 = function () {
    console.log(`Hello my love for you, ${this.name}`);
}

console.log(jsUser.greeting2());