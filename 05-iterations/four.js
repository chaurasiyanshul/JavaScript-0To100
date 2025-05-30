const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);  
}

// for in for arrays

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);   // key value 
    console.log(key);  // for keys
    
    
}