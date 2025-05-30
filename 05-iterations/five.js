const coding = ['js', 'ruby','java','python','cpp']

// coding.forEach(function (val){
//     console.log(val);
    
// })

//  with arrow funciton

coding.forEach((item)=>{
    // console.log(item);
})

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : 'js'
    },
    {
        languageName : "java",
        languageFileName : 'java'
    },
    {
        languageName : "python",
        languageFileName : 'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
  
})