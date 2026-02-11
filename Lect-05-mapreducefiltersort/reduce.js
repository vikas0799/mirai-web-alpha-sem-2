let arr=[23,1,2,6,34,23,4];
//  let ans=arr.reduce(fn,initial value)
let ans=arr.reduce((acc,element,index,arr)=>{
    // console.log(acc,element,index,arr);
    acc +=element;
    
    return acc;
},10)

console.log(ans);
