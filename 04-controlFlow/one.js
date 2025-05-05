// if

if (2!=3){
    console.log("Executed");
}

const temperature = 41
if (temperature === 40){
    console.log("Temperature is less than 50");
    
}else{
    console.log("Too hot")
}

const score = 200

if (score>200) {
    let power = "fly"
    console.log(`User Power: ${power}`);  
}

// console.log(`User Power : ${power}`)  Block Scope

const balance = 1000

if (balance < 500) {
    console.log("less than 500")
    
} else if (balance<750){
    console.log("less than 750");
    
}else{
    console.log("less than 1000");
    
}



const userLoggedin = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedin && debitCard){         // and operator
    console.log("Allow to Buy Course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow to Login");
    
    
}

// <,> <=,>=,==,!=,===,!==