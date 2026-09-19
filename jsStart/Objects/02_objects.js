//const instaUser= new Object();

const instaUser = {};
instaUser.userId = "ShubhSwat_51";
instaUser.name = "ShubhSwat";
instaUser.loggedIn = false;

//console.log(instaUser);
const regularUser = {
    email: "regular@user.com",
    fullname: {
        userFullName: {
            firstName: "Shubh",
            lastName: "Swat",
        },
    },
};
//console.log(regularUser.fullname.userFullName.firstName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
//const obj3 = {obj1, obj2};
//const obj3 = Object.assign({}, obj1, obj2);
//object.assign(EventTarget,source1,source2,...)
//object.assign()
//  method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
const obj3 = {...obj1, ...obj2};

//console.log(obj3);    

const users=[
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "def@gmail.com"
    },
    {
        id: 3,
        email: "hgi@gmail.com"
    }
]
users[1].email
console.log(instaUser);   
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("name"));
