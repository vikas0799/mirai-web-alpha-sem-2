function display(){
    let a=90;
    let b=10;
    let c=15;

    let sum=()=>{
        console.log(a+b);
        //  return a*b*c;
    }

    return sum;
}

let ans=display();
// ans=()=>{
//         console.log(a+b);
//          return a*b*c;
//     }
console.log(ans);
ans();
