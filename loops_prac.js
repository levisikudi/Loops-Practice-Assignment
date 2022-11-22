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

console.log("4: Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.")

let age = 87;

for (i = 0; i <= 100; i++){
    if(i == age){
        console.log("Hurray")
    } else{
        console.log("age doesn't match")
    }
}

console.log("5: Write a loop that logs all even numbers from 0-700")

for (i = 0; i <= 700; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}


console.log("6: Write a loop that logs all odd numbers from 0-700")

for (i = 0; i <= 700; i++){
    if (i % 2 == 1){
        console.log(i)
    }
}

console.log("7: Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”")

for (i = 1900; i < 1949; i++){
    if (i == 1900){
        console.log(`It's ${i}! The Zeppelin was invented`)
    }else if (i == 1902){
        console.log(`It's ${i}! The Teddy Bear was invented`)
    }else if (i == 1910){
        console.log(`It's ${i}! The Talking Motion Picture was invented`)
    }else if (i == 1913){
        console.log(`It's ${i}! The Bra was invented`)
    }else if (i == 1918){
        console.log(`It's ${i}! The Fortune Cookie was invented`)
    }else if (i == 1923){
        console.log(`It's ${i}! The Traffic Signal was invented`)
    }else if (i == 1935){
        console.log(`It's ${i}! The Radar was invented`)
    }else if (i == 1938){
        console.log(`It's ${i}! The Ballpoint pen was invented`)
    }else if (i == 1943){
        console.log(`It's ${i}! The Slinky was invented`)
    }
}

