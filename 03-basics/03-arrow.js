// arrow function and this method

// if we have to refer current context in variables 
// {this.username}
// this refers current context of object

const user = {
    "username" : "Kashish",
    "price" : 999,
    welcomeMsg : function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }   
}

// user.welcomeMsg()
user.username = "gungun"
user.welcomeMsg()
// console.log(this)


// +++++++++++ Arrow function +++++++++++++++

const chai = () =>{                 // Explicit run tab hota hai jab curly bracket aur return likhna pade
    let username = "betu"
}



const addTwo = (num1 , num2) => ( num1 + num2)  // Implicit run jab curly bracket aur return nhi likhna padta

console.log(addTwo(3,5))


