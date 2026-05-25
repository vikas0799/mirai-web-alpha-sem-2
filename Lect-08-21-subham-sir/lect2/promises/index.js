// promises

// promises -> 

// const mypromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let num = Math.random()*10;
//     if(num<5){
//       resolve(`this promise is fulfilled ${num}`)
//     }else{
//       reject(`this promise is rejected ${num}`)
//     }
    
//   },2000)
// })

// console.log(mypromise);

// mypromise.then((response)=>{
//   console.log(response);
// }).catch((err)=>{
//   console.log(err);
// })

// 

console.log("start");
const promise = new Promise(function(resolve, reject) {
  setTimeout(()=>{
    resolve("Done");
  },1000)
});

setTimeout(()=>{
  console.log("timeout");
},1000)

promise.then(function(result) {
  console.log(result);
});
console.log("end");