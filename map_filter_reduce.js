// map ():- creating a new array by performing some operations on each array element

/*const a= [1,2,3]
a.map(()=>{
    console.log(value)
})
console.log(a)*/


let arr = [10,20,30]
let arr2 = arr.map((value, index, array)=>{
    console.log (value, index, array)
        return value*2;

})
 
    

console.log(arr2)

let b= [10,11,12,13]
let c = b.map(sahil) 
    function sahil(num) {
    return  num*3
}
console.log(c)



/* filter():- */
let  arr3 = [89,90,20,9,5,6,]
let arr4=  arr3.filter((a)=>{
    return a<10
})
console.log(arr4)