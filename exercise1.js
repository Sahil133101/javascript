/*write a javascript program to generate a random number and store it in  a variable the program than takes
 an input from the user to tell them writter the guess was correct. greater or lesser than the original number
 */

 let x = Math.random() *10 ;
 console.log(x)

 const prompt = require("prompt-sync")(); 

 let y = prompt("enter you number")
 if( y>x){
    console.log("greater than random number")
 }
 else if(y<x){
    console.log("lesser to random number")
 }
 else {
    console.log("both are equal")
 }
 