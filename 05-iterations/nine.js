// reduce method

const myNums = [1,2,3]
const newNums = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc+currval
},0)

console.log(newNums)
