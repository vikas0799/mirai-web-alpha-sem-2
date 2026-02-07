function display(a,b){
    // display -> HOF fn, a=>callback fn
console.log(a);
console.log(b);
let ans=a(2);
console.log(ans);

}

let x=(k)=>{
    console.log("mirai");
    console.log("school");
    return k*k;
    
};
let y=45;
// display(23,45);
display(x,y);