const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("hello");
  },2000)
})

// console.log("start");

// async function fun(){
//   console.log("async start");
//   const response = await p1;
//   console.log(p1);
//   console.log("async end");
// }

// fun()
// console.log("end");

async function fun(){
  const response = await p1;
  return response;
}

let data = await fun();
console.log("module-type",data);   //type = module in index.html will convert the whole file in async file
// await fun()    //we can't use await outside async function (it will have no effect)
// fun().then((data)=>console.log(data)).catch((err)=>console.log(err));

async function fun2(){
  const data = await fun();
  console.log(data);
}

// questions - https://www.notion.so/Async-Await-3089fc5e8605805fa77ae5e579acb0ff?source=copy_link
