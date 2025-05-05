const UserEmail = "hania@gmail.com"
const UserEmail1 = []
const UserEmail2 =  " "


if (UserEmail){
    console.log("Got User Email");
    
}else{
    console.log("Dont have user Email");
    
}



if (UserEmail1.length===0){
    console.log("Array is empty");
    
}

if (UserEmail2){
    console.log("Got User Email");
    
}else{
    console.log("Dont have user Email");
    
}





// falsy values
// false,0,-0, bigint 0n,"",null, undefined, NaN

// truthy values
// "0", 'false'," ",[],{}, function()()

//   Nullish coalescing operator (??): null undefined

let val1;

// val1 = null ?? 10

// val1 = null ?? 10 ?? 20

// console.log(val1);

//  +++++++++++++++++++++++++++++    Ternary Operator++++++++++++++++++++++++++++

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



