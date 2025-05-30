const coding = ['js', 'ruby','java','python','cpp']

// const values = coding.forEach((item)=>{
//     console.log(item);
    
// })

// console.log(values);

// when we use filter then we have to specify a call back function
// then we have to give conditions
// Returns the elements of an array that meet the condition specified in a callback function.

const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter((num) => num>4)

const newNums = myNums.filter((num) => {
    return num > 4
})  // scope ke return jaroori hai

console.log(newNums);
