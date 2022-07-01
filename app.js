const api = "0aef031bf1241bcca68c3775d1c12881";

const weatherIcon = document.getElementById("weather-icon");
const loca = document.querySelector("#location");
const desc = document.querySelector(".desc");
const celsius = document.querySelector(".cel");
const toggle = document.querySelector(".temp");
const farenheit = document.querySelector(".far");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

window.addEventListener("load", () => {
  let lat;
  let lon;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
      console.log(url);
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { sunrise, sunset } = data.sys;
          const { temp } = data.main;
          const { description, icon } = data.weather[0];
          console.log(description, icon);
          const place = data.name;

          const weatherUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const far = (temp * 9) / 5 + 32;

          //convert epoch time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          weatherIcon.src = weatherUrl;
          loca.textContent = `${place}`;
          desc.textContent = `${description}`;
          celsius.textContent = `${temp.toFixed(2)}°C`;
          farenheit.textContent = `${far.toFixed(2)}°F`;
          sunrise.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunset.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});
