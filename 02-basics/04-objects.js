const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anshul"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    Fullname : {
        UserFullname : {
            FirstName: "Anshul",
            LastName: "Chaurasiya",
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.Fullname.UserFullname.FirstName)


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2} returning like in array
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2};  // universal method
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "anshul@gmail.com",

    }
]


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor  basic method for accessing the value
// Another method 

const {courseInstructor : instructor } = course        // object destructuring

// console.log(courseInstructor);
console.log(instructor)

