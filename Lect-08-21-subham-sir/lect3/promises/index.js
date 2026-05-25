// const p1 = Promise.resolve(30);

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("p2")
  },100)
})
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("p3")
  },150)
})
const p4 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("p4")
  },130)
})

// const results = Promise.all([p1,p2,p3,p4]);
// results.then((response)=>console.log(response));

const result2 = Promise.any([p1,p2,p3,p4])
result2.then((response)=>console.log(response));

const result3 = Promise.race([p1,p2,p3,p4]);
result3.then((response)=>console.log(response));
