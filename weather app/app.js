const apikey="76e4d7b5b685f7ab967cc27e42e7b5b5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");
const input=document.querySelector("input");


async function checkweather(city){

    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
        let data=await response.json();
     console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed +"km/h";


    if(data.weather[0].main=="Clouds"){

        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){

        weatherIcon.src="clear.png";
    }
    else  if(data.weather[0].main=="Rain"){

        weatherIcon.src="rain.png";
    }
    else  if(data.weather[0].main=="Drizzle"){

        weatherIcon.src="drizzle.png";
    }
    else  if(data.weather[0].main=="Snow"){

        weatherIcon.src="snow.png";
    }
    else  if(data.weather[0].main=="Smoke"){

        weatherIcon.src="mist.png";
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
  });
searchbtn.addEventListener("click" ,()=>{

    checkweather(searchbox.value);

})
