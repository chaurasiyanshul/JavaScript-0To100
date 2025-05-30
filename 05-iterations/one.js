// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
      
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 7) {
//         console.log('Thala For a Reason'); 
//     }
//     console.log(element);
      
// }

for (let i = 0; i <=10; i++) {
    // console.log(`Outer Loop Value:${i}`);
    for (let j = 0; j <= 10; j++){
        // console.log(`inner loop value ${j} and outer loop value ${i} `);  
    }
    
}

let myArray = ['shaktiman', 'betu','kashish','gungun']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
// ++++++++++++++==   Break and Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5")
        break
    }
    const element = index;
    console.log(`the number is ${index}`);
       
}