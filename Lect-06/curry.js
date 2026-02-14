// function add(a,b){
//     return a+b;
// }

// add(2,3);  //7
// add(2)(3)();//7



function sum(a){
    return function(b){
        return a+b;
    }
}

console.log(sum(2)(3));  //5

// let ans=sum(4);
// console.log(ans);


// let res=ans(2);
// console.log(res);
