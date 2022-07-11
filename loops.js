// for loop


let numbers = [1, 2, 44, 5, 65, 76, 8,]

let len = numbers.length;


// for loop
console.log("---------------------------------------for loop------------------------------------")

for (let i = 0; i < len; i++) {
    console.log(numbers[i])
}


// for in loop
console.log("---------------------------------------for in loop------------------------------------")
for (let x in numbers){
    console.log(numbers[x])
}




// while loop



console.log("---------------------------------------While loop------------------------------------")
let j=0;
while(j<len){
    console.log(numbers[j]);
    j++
}



// break statement

console.log("---------------------------------------Break Statement loop------------------------------------")

for (let i = 0; i < len; i++) {
    if(i==3){
        break;
    }
    console.log(numbers[i])
}




console.log("---------------------------------------continue Statement loop------------------------------------")

for (let i = 0; i < len; i++) {
    if(i==3){
        continue;
    }
    console.log(numbers[i])
}
