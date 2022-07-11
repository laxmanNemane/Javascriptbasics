let nav = "lakhan Nemane" 
let brother = "    Ram    "





console.log(nav); //lakhan nemane
console.log(nav.slice(0,6))  //lakhan
console.log(nav.length)  //13
console.log(nav.substring(1,4))  //akh  1 is start index 4 is end index
console.log(nav.substr(1,4))   //akha  
console.log(nav.replace("lakhan", "Ram"))  //Ram
console.log(nav.toLowerCase()); //lakhan nemane
console.log(nav.toUpperCase()); //LAKHAN NEMANE
console.log(nav.concat("he is brother of ", brother));  //lakhan nemane he is brother of Ram
console.log(brother.trim())  //"ram"  it removes extra spaces
console.log(nav.charAt())    //l
console.log(nav.split(" "))  //["lakhan" , "Nemane"]
console.log(nav.split(","))  //["lakhan Nemane"]
console.log(nav.lastIndexOf("Nemane"));  //7
console.log(nav.startsWith("Hello"));  //false 
console.log(nav.startsWith("lakhan"));  //true 
console.log(nav.endsWith("Hello"));  //false 
console.log(nav.endsWith("Nemane"));  //true 



