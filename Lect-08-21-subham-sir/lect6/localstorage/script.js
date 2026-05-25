
// to set data in local storage
localStorage.setItem("name","shubham")

// to get data from local storage
console.log(localStorage.getItem("name"));

// to delete any data from todos
localStorage.removeItem("todos");


let myObj = {
  name:"shubham",
  num:7
}
let arr = [11,21,31,41,51,61]
let strArr = JSON.stringify(arr)
console.log(arr);
console.log(strArr);
let strObj = JSON.stringify(myObj)

console.log(myObj);
console.log(strObj);
localStorage.setItem("myobj",strObj);
localStorage.setItem("arr",strArr);
// console.log(localStorage.getItem("myobj"));

let Objdata = localStorage.getItem("myobj")
let realObj = JSON.parse(Objdata)
console.log('object -> ',realObj);

