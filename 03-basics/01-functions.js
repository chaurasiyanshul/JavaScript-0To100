//  Functions


// function sayMyName(){
//     console.log("H")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("H")
// }

// sayMyName()

function addTwoNumbers(num1, num2){ // parameters 
  return num1 + num2 // 
  // console.log(num1 + num2)

}

const result = addTwoNumbers(3,5)
// console.log("Result:", result)
// addTwoNumbers(3,null)
// addTwoNumbers(3,"a")



// function loginUserMsg(username){
//   return `${username} Just Logged in `
// }

// loginUserMsg("Anshul")   // function chalega par return kuch nahi karega
// console.log(loginUserMsg("kashish")) // function chalega bhi aur print bhi karega
// if we call function but can't given arguements the function will return undefined

// console.log(loginUserMsg()) // this will return undefind

function loginUserMsg(username= "Betu"){  // if we define here user name then if we do not give username arguement when we call function this will give a functions but if we give function arguements this will simply over-ride it
  if (!username){
    console.log("Please enter Username")
    return
  }
  return `${username} Just Logged in `

}

console.log(loginUserMsg("kashish"))
console.log(loginUserMsg())











function test() {
    return typeof arguments;
}
console.log(test());
console.log(typeof([] + []))
let x = 1;
if (x = 0) {
  console.log("True");
} else {
  console.log("False");
}

// let a = [1, 2, 3];
// b.push(4);
// console.log(a);
// let b = a;
// console.log(b)


// some time we have not idea that how many arguements will come 
// like shopping cart 
// we just add and add 

function calculateShoppingCart(...num1){  // ...num1 this will call as rust operator in parameters ******* same as spread operator but usecase is different                                    // 
  return num1
  
}

console.log(calculateShoppingCart(100,200,500))


const user = {
  "username" : "Kashish",
  "price" : 69
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}

handleObject(user)


