let arr=[23,1,2,6,34,23,4];
//argument. -> callback fn
let ans=arr.map((element,index,arr)=>{
    // console.log(element,index,arr);

    return element*2;

});

console.log(ans);
