// it means default behavior to declare  variable and function moved at the top before code execution



greetings()
console.log(x)
 
var  x=5;
function greetings(){
    console.log("Hello Lakhan! Have Nice day")
}

// console.log(c);  
//Uncaught ReferenceError: Cannot access 'c' before initialization  # beacuse its value store seperate is block
let c=5;

console.log(c);


// greetings()        //move at 5 number line but still get answer
// console.log(x)    //move at 6 number line but still get answer