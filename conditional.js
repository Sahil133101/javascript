const prompt = require("prompt-sync")(); 

let a = prompt("what ur age")
a = Number.parseInt(a) // convering string to number 
console.log(a)

if(a>0 && a<10 ) {
    alert("this is valid age")
}

else  if (a>10 && a<20){
    alert("this is invalid")
}

else if (a < 20 &&  a>30)  {
    alert("hello")

   
    

} 
 else  {

    alert("hii")


}
    
    