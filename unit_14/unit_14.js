const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "de284e85419749f807817c277d922595"
}
const cityId = document.querySelector('#selectCity').value;
function getWeather() {
	
} 
    
getWeather();

let out = document.querySelector('#selectCity').onchange = getWeather;
console.log(cityId)