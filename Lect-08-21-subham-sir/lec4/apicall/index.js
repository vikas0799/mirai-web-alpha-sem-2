
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
getPosts();   // returns an array

async function getSinglePosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const data = await res.json();
  return data;
}
getSinglePosts().then((data)=>console.log(data));    //returns an object