let arr=[23,1,2,6,34,23,4];
//argument. -> callback fn
let ans=arr.filter((element,index,arr)=>{
    // console.log(element,index,arr);
     if(element>=18)
        return true;
      else
        return  false;
    

});

console.log(ans);
