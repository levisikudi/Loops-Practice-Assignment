// 
console.log("1 : Write a for loop that logs 0-15;")

for (let i = 0; i <= 15; i++) {
    console.log(i)
    
}

console.log("2: Write a for loop that counts from 15-0")

for (let i = 15; i >= 0; i--) {
    console.log(i)
    
}

console.log("3: Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.")

let laps = 0;
for (let i = 0; i < 12; i++){
    console.log("That's another lap")
    laps++;
}
console.log(laps) 