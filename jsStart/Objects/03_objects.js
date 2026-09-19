//destructring objects
const course={
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh Choudhary",
}

course.courseInstructor
//const {courseInstructor} = course
const{courseInstructor: instructor} = course
console.log(instructor);