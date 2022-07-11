// block means wrap the mulltiple statement and it define by {}

{
    var a=10;
    let b=20;
    const c=30;
console.log("------in this block variable--------------")
console.log(a)
console.log(b)
console.log(c)    
}
console.log("------outside of block variable--------------")


console.log(a)  //output 10 because this refere global object
console.log(b) // ReferenceError: b is not defined because its block scope variable
console.log(c)// ReferenceError: c is not defined because its block scope variable



