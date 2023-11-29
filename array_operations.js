// // let a = ["hii i am sahil"]
// // a.push("sharma")
// // console.log(a)

// // let b = [10,20,30,40]
// // b.pop()
// // console.log(b)

// // let c =[10,20,40,50]
// // c.shift()
// // console.log(c)

// // let d = [212509]
// // d.unshift(11)
// // console.log(d)

// // let e = [11212509]
// // e.push("btech")
// // console.log(e)

// // let f = [10,20,30,40]


// // //f.indexOf(1)
// // console.log(f.indexOf(20))

// //destructring of array

// function getProfile(){
//     return ['john',
// 'doe'
// ['red','green','blue']
// ];
// }
// let [firstName, lastname,[color1, color2, color3]] =getProfile();
// console.log(color1, color2, color3);


function getscores(){
    return [70,80,90];
}
let scores = getscores();
let x = scores[0];
let y = scores[1];
let z = scores[2];

console.log(x,"",y,"",z);

// object literal enhancement

let fname ="sahil"
let lname= "sharma"

let fullname ={
    firstname : fname,
    lastname : lname,
}
console.log(fullname)


//rest parameter

function sum(...args){
    let sum =0
    for(let i of args){
        sum+=i;
    }
    return sum;
    

}
console.log(sum(1,2));
console.log(sum(1,2,3,4,5,6,7,8))

//rest parameter

function getScore(){
    return [10,20,30,40]
}
let[u,v, ...args] = getScore();
console.log(u)

{/* <script>
	// es6 rest parameter
	function fun(...input){
		let sum = 0;
		for(let i of input){
			sum+=i;
		}
		return sum;
	}
	console.log(fun(1,2)); //3
	console.log(fun(1,2,3)); //6
	console.log(fun(1,2,3,4,5)); //15				

 */}
