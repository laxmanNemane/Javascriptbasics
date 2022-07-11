// function statement

function a(){
    console.log("lakhan")
}
a();


// function expression
console.log(a)
var a =  function (){
console.log("i am in a")
}


// Anonymeus function

function  llakhan() {
console.log("hello")
}
llakhan();


//paramaetrised and argumrnt functions

function sum(a, b){
    console.log("the sum of two number is",a+b)
}
sum(2,3);  

//there is a,b is parameter and 2,3 is argument



// this we can say first class function

setTimeout(() => {
    console.log("hello lakhan")
}, 2000);

