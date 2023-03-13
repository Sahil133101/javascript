/*wap to print the marks of student in an object using for loop*/

let marks ={ 
    sahil: 87,
    harshit : 85, 
    deepak: 90,
    bhanu : 89,
}

for(let i =0; i<= Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i]+ marks[Object.keys(marks)[i]])
}