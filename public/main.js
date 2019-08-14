const main = () => {
  const input = document.querySelector('input').value
  const url = 'https://api.openweathermap.org/data/2.5/'
  const key = '2823a9a190fd597e6803d812db33835c'
  const location = `${url}weather?q=${input}&appid=${key}`
  fetch(location)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.temp').textContent = city.main.temp
      document.querySelector('.humidity').textContent = city.main.humidity
      document.querySelector('.wind-speed').textContent = city.wind.speed
    })
}
//todo: add geolocation
// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
//   } else {
//     alert('Geolocation is not supported by this browser.')
//   }
// }

// const geoSuccess = position => {
//   let lat = position.coords.latitude
//   let lng = position.coords.longitude
//   alert('lat:' + lat + ' lng:' + lng)
// }

// const geoError = () => {
//   alert('Geocoder failed.')
// }

document.querySelector('button').addEventListener('click', main)
// document.addEventListener('DOMContentLoaded', getLocation)
