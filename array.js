let cars = ["Audi" , "BMW" , "JAGUAR" , "VERNA" , "PORSCHE", "ENOVA"]
//index =     0        1        2          3         4          5


let arr1 = ["bmW" , "audi"]
let arr2 = ["Enova" , "Jaguar"]


console.log(cars[0]) //Audi  
console.log(cars.toString())   //Audi,BMW,JAGUAR,VERNA,PORSCHE,ENOVA
console.log(cars.join("*"))    //Audi*BMW*JAGUAR*VERNA*PORSCHE*ENOVA
console.log(cars.pop())    //ENOVA
console.log(cars.push("Alto"))  // add alto at 6th position
console.log(cars.shift())  // remove First Element in Array
console.log(cars.unshift("Baleno"))  //add baleno at position first
console.log(cars.length)  //length of array 6
// console.log(cars)  
console.log(cars.sort())  //ascending orders
console.log(cars.reverse())   //reverse the array 

console.log(arr1.concat(arr2))  //cocat the two array