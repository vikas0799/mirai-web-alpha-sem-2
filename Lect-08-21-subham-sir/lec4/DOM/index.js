console.log(document);

// selectors
const ele = document.querySelector(".cl1");
console.log(ele);       // span

const eles = document.querySelectorAll(".cl1");
console.log(eles);      //nodelist

const para = eles[1]
// // value getter
// console.log(ele.innerHTML); 
// console.log(ele.innerText); 
// console.log(ele.textContent); 

// console.log(ele.id);
// console.log(ele.className);
// console.log(ele.classList);       
// console.log(ele.getAttribute("name"));

// ele.classList.remove("cl2");
// console.log(ele.className);

// ele.classList.add("cl5");
// console.log(ele.className);

// ele.classList.toggle("cl2");
// console.log(ele.className);
// // //
// console.log(ele.parentElement.parentElement);
// console.log(ele.previousElementSibling);
// console.log(ele.nextElementSibling);

// create element
const shubham = document.createElement("shubham");
shubham.style.display = "block";
shubham.style.fontSize = "36px"

shubham.innerText = "<h3>this is h3 tag</h3>"
shubham.innerHTML = "<h3>this is h3 tag</h3>"

console.log(shubham);

// before or after an element
para.after(shubham)
para.before(shubham)

// inside an element
const div = ele.parentElement;
div.append(shubham)
div.prepend(shubham)