const MyNumers = [1,2,3,4,5,6,7,8,9]

// const NewNums = MyNumers.map((nums) => nums + 19)
// const NewNums = MyNumers.map((nums) => {return nums + 19})

const newNums = MyNumers
                .map((nums) => nums*10)
                .map((nums) => nums+1)
                .filter((nums) => nums>=40 )

console.log(newNums);
