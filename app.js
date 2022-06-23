const api = "cacf684837fb3cca79c29972e90569d1";
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cacf684837fb3cca79c29972e90569d1&units=metric";
console.log(url);

window.addEventListener("load", () => {
  let lat;
  let long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      //   console.log("lat");
    });
  }
});
