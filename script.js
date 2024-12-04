const apikey = "fbeba6e069051f2d01dda20644d61c4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const rem = "&appid=fbeba6e069051f2d01dda20644d61c4b&units=metric";

const input = document.querySelector(".input")
const button = document.querySelector(".button");
const topsec = document.querySelector(".top")
const middle = document.querySelector("#middle")
const bottom =document.querySelector(".bottom")

button.addEventListener("click", ()=>{
  const req = input.value;
  weather(req);
})

async function weather(input){
  const response = await fetch(apiUrl + `q=${input}` + rem);
  var data = await response.json();
  console.log(data);
  
  document.querySelector(".cityname").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp+"°C";
  document.querySelector(".humidity_num").innerHTML = data.main.humidity+"%";
  document.querySelector(".windspeed_num").innerHTML = data.wind.speed+"kmph"
  middle.style.display = "flex";
  bottom.style.display = "flex";
  console.log(middle.style.display);
}


