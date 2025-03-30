// singleton

// Object literals
//Another method for creating object >> object.create()

const mySym = Symbol("key1")


const Jsuser = {
    name : "Hitesh",
    "full_name" : "hitesh chaudhary",
    age: 10,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],

}

Jsuser.email= "anshul@iitp.ac.in"
// Object.freeze(Jsuser)  // ye lagane ke bad value change nhi hoti h

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full_name"])


Jsuser.greeting = function(){
    console.log('Hello Js user')
}

console.log(Jsuser.greeting());

// `` this is called backticks in Js this is called string interpulation

Jsuser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(Jsuser.greeting2())