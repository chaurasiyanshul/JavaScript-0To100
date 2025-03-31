//  Functions


function sayMyName(){
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("H")
}

sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)

}
addTwoNumbers(3,null)
addTwoNumbers(3,"a")

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

let a = [1, 2, 3];
b.push(4);
console.log(a);
let b = a;
console.log(b)