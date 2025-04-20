// Nested Scopes



function one(){
    const username = "Kashish"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}


one()

// so bat ye hai ki parent ke variable child access kar sakta hai
// lekin child ke variable parent access nhi kr sakta hai

if (true){
    const username = "kashish"
    if (username === "kashish"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website)
}

// console.log(username);


// +++++++++++++++++  Interesting    +++++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num +1
}

// global scope aur local scope variable ki tarah function me bhi hota hai
// const wale function ko ham function Initialize krne se pehle access nhi kar sakte 
// but normal function ko ham kar sakte hai
console.log(addTwo(5))
const addTwo = function(num){
    return num +2

}


