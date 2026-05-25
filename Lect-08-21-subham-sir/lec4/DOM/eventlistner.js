

const h1 = document.getElementById("heading");

// h1.addEventListener("mouseover",(e)=>{
//   console.log(e);
//   console.log(e.target);
// })


// h1.addEventListener("click",(e)=>{
//   console.log(e);
//   console.log(e.target);
// })

// const html = document.getElementsByTagName("html") // bad practice to apply 
// // event on whole html when we can apply it on child
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh"

body.addEventListener("dblclick",(e)=>{
  // console.log(e.clientX,e.clientY);
  const obj = createCircle();
  // // always provide css value in string
  obj.circle.style.position = "absolute"
  obj.circle.style.left = `${e.clientX - obj.radius}px`;
  obj.circle.style.top = `${e.clientY - obj.radius}px`;
  body.append(obj.circle);
})

function createCircle(){
  const div = document.createElement("div");
  // random number between 50 to 200 
  // formula -> Math.round(Math.random()* (max-min)) + min
  const radius = Math.round(Math.random()*150) + 50
  div.style.height = `${radius*2}px`;
  div.style.width = `${radius*2}px`;
  div.className = "circle";
  // div.classList.add("circle");
  let sol =  {
    circle:div,
    radius:radius
  };
  return sol;
}