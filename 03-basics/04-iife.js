// Immediately invoked Function Expressions
// global scope ke pollution ko hatane ke liye iife ka use krte 

// ()() first for write a function and second for executing

(function chai(){
    console.log("DB connected")
})();

((name) =>  {
    console.log(`Db connectex two ${name}`)
})("Kashish")


