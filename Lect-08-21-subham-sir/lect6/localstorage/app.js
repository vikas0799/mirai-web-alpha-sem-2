const API_KEY = "cf73d38d029b5b594a52f8399a2f992f"
const form = document.querySelector("form");

checkData();

function checkData(){
  let data = JSON.parse(localStorage.getItem("weather"));
  if(data){
    document.getElementById("container").innerHTML = `<h2>${data.name}</h2>
    <h4>${data.main.temp} F</h4>
    <p>${data.weather[0].description}</p>`;
  }
}

form.addEventListener("submit",(e)=>{
  // to stop refreh of page on submission of form
  e.preventDefault();
  const city = e.target.children[0].value;
  createWeatherUi(city)
  // to empty input 
  e.target.children[0].value = "";
})

async function createWeatherUi(city){
  let data = await getWeather(city);
  localStorage.setItem("weather",JSON.stringify(data))
  document.getElementById("container").innerHTML = `<h2>${city}</h2>
  <h4>${data.main.temp} F</h4>
  <p>${data.weather[0].description}</p>`
  ;
}

async function getWeather(city){
  let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  let data = await res.json();
  console.log(data);
  return data;
}
