// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "HEllo World"
for (const greet of greetings) {
    // console.log(`Each chat is ${greet}`);   
}

// maps

// ye unique value ke liye jani jati and jis order pr ham enter krte hai us order me hi print hoti hai

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map)

for (const key of map) {
    // console.log(key);
    
}

// if you want to print key , value separate

for (const [key, value] of map) {
    console.log(key, ':', value);
    
}