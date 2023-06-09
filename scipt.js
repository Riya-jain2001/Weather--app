const apiKey=" 5966bebddd92114605b09f089ba6b4c4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&=bangalore";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid={apiKey}`);
    const data=await response.json();
    console.log(data);

}
checkWeather()