// let arr=[23,1,45,67];
// let brr=[23,100,150];

// let ans=[...arr,...brr,3000,4000];  //spread
// console.log(ans);


// function display(...arr){   //rest
// console.log(arr);

// }
// display(23,45,67,1,2,3,5,3);


let arr=[23,1,45,67];
let elelemnt=45;
let idx=arr.indexOf(elelemnt);
console.log(idx);


//index ke bad elelemnt ko remove karte hain
arr.splice(idx,1);
console.log(arr);
