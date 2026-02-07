function outer(){
    let a=90;
    let inner=()=>{
        console.log("hi");
        console.log("bye");
    };
    return inner;
}
//outer ->hof fn 
let ans=outer();
console.log(ans);
