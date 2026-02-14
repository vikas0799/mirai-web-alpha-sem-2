
let fact=(n)=> {
    if (n < 1)
        return 1;
    return n * fact(n - 1);
}


let sum=(n)=>{
    let ans=0;
    for(let i=1;i<=n;i++){
        ans +=i;
    }
    return ans;
}

// let ans=fact(10);
// console.log(ans);
// let ans1=fact(10);


function memo(fn) {
    let cache = {};
    return function (n) {
        if (cache[n]) {
            return cache[n];  //direct result return from cache
        }
        else {
            cache[n] = fn(n);  //caculate and store in cache then return
            return cache[n];
        }
    }
}

let factorial = memo(fact);
// factorial=function (n) {
//         if (cache[n]) {
//             return cache[n];  //direct result return from cache
//         }
//         else {
//             cache[n] = fn(n);  //caculate and store in cache then return
//             return cache[n];
//         }
//     }
let ans=factorial(5); 15 //miss hitting
let res=factorial(5); 15 //pass hitting

let anshu=factorial(3);
let aarav=factorial(3);  



let sumofn=memo(sum);
sumofn(5);  //15  miss hitting
sumofn(5);  //15 pass hitting



