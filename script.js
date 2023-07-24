const weatherCardElement = document.getElementById("weather-card");
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const descriptionElement = document.getElementById("description");
const weatherCodeElement = document.getElementById('weatherCode')
const windDirectionElement = document.getElementById('windDirection')
const timeElement = document.getElementById('time')

let currentTime = new Date().getHours();
  if(currentTime >=6 && currentTime < 21){
    weatherCardElement.classList.add("weather-card");
  }else {
    weatherCardElement.classList.add("weather-card-night");
  }

async function geoLocationWeather(){
    const response1 = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const obj1= await response1.json();
    const{longitude,latitude,city} = obj1

    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const obj2 = await response2.json();
    const { current_weather } = obj2; 
    const { temperature,
      windspeed,
      winddirection,
      weathercode,
      is_day,
      time} = current_weather;

      cityElement.textContent += city;
      temperatureElement.textContent += temperature+" °C";
      windElement.textContent += windspeed + " m/s  - " + windSpeed(windspeed)  ; 
      windDirectionElement.textContent += winddirection + "°  - " + getWindDirection(winddirection);
      descriptionElement.textContent += getDescription(weathercode);
      timeElement.textContent += time;   
}

 function getDescription(code){
    switch(code){
        case  0: return "Clear sky";
        case  1: return "Mainly clear";
        case  2: return "partly cloudy";
        case  3: return "Overcast";
        case 45: return "Fog";
        case 48: return "Depositing rime fog";
        case 51: return "Drizzle: Light";
        case 53: return "Drizzle:moderate";
        case 55: return "Dense intensity";
        case 56: return "Freezing Drizzle: Light";
        case 57: return "Freezing Drizzle: dense intensity";
        case 61: return "Rain: Slight";
        case 63: return "Rain: moderate";
        case 65: return "Rain: heavy intensity";
        case 66: return "Freezing Rain: Light";
        case 67: return "Freezing Rain: heavy intensity";
        case 71: return "Snow fall: Slight";
        case 73: return "Snow fall: moderate";
        case 75: return "Snow fall: heavy intensity";
        case 77: return "Snow grains";
        case 80: return "Rain showers:Rain showers: Slight";
        case 81: return "Rain showers: moderate, and violent";
        case 82: return "Rain showers: violent"
        case 85: return "Snow showers slight"
        case 86: return "Snow showers heavy";
        case 95: return "Thunderstorm: Slight or moderate";
        case 96: return "Thunderstorm with slight"
        case 99: return "Thunderstorm with heavy hail"
        default: return " - ";
    }
  }

    function windSpeed(windspeed){
      if(windspeed >= 0 && windspeed <= 0.5){
        return("calm");
      }
      if(windspeed > 0.5 && windspeed <=1.5){
       return( "light air");
      }
      if(windspeed > 1.5 && windspeed <=3){
        return("light breeze");
      }
      if(windspeed > 3 && windspeed <=5){
        return  ("gentle breeze");
      }
      if(windspeed >5 && windspeed <=8){
        return ("moderate breeze");
      }
      if(windspeed >8 && windspeed <=10.5){
        return("fresh breeze");
      }
      if(windspeed > 10.5 && windspeed <=13.5){
        return ("strong breeze");
      }
      if(windspeed > 13.5 && windspeed <=16.5){
        return ("moderate gale");
      }
      if(windspeed >16.5 && windspeed <=20){
        return ("fresh gale");
      }
      if(windspeed >20 && windspeed <=23.5){
        return ("strong gale");
      }
      if(windspeed >23.5 && windspeed <=27.5){
        return ("whole gale");
      }
      if(windspeed >27.5 && windspeed <=31.5){
        return ("storm");
      }
      else {
        return ("hurricane");
      }
    }
       
    function getWindDirection(winddirection){
      if(winddirection>= 0 &&  winddirection<=22.5){
        return ("N");
      }
      if(winddirection> 22.5 &&  winddirection<=45){
        return ("NNE");
      }
      if(winddirection>45 &&  winddirection<=67.5){
        return ("ENE");
      }
      if(winddirection>67.5 &&  winddirection<=90){
        return ("E");
      }
      if(winddirection>90 &&  winddirection<=112.5){
        return ("ESE");
      }
      if(winddirection>112.5 &&  winddirection<=135){
        return ("SE");
      }
      if(winddirection>135 &&  winddirection<=157.5){
        return ("SSE");
      }
      if(winddirection>157.5 &&  winddirection<=180){
        return ("S");
      }
      if(winddirection >180 &&  winddirection<=202.5){
        return ("SSW");
      }
      if(winddirection>202.5 &&  winddirection<=225){
        return ("SW");
      }
      if(winddirection> 225 &&  winddirection<=247.5){
        return ("WSW");
      }
      if(winddirection> 247.5 &&  winddirection<=270){
        return ("W");
      }
      if(winddirection> 270 &&  winddirection<=292.5){
        return ("WNW");
      }
      if(winddirection> 292.5 &&  winddirection<=315){
        return ("NW");
      }
      else if(winddirection>= 315 &&  winddirection<=337.5){
        return ("NNW");
      }
    }
    

  geoLocationWeather();
// 1. функция, которая интерпертирует код погоды
  //  0 -> "clear sky"
  //  1 -> "Mainly clear"
  
  // 2. Разместите информацию на html странице 

  // 3. Подключите стили

  // 4. Рефакторинг кода - в отдельные методы 

  // 5. Сделайте deploy на git pages
