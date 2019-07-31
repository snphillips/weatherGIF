(function() {

  document.getElementById("button").addEventListener("click", lookupWeather);


  // The mega function that does it all.
  // When the submit button is clicked, a fetch call is made to
  // the Open Weather Map API, using the user's inputted zip.
  function lookupWeather() {

    // Whatever value the user types into the zip field
    var zip = document.getElementById("zip").value


    //===============================
    // Clears the weather data, in case there was a previous query
    //===============================
    function clearWeatherData(){
      document.getElementById('location').innerHTML = ` `
      document.getElementById('weather').innerHTML = ` `
      document.getElementById('current').innerHTML = ` `
      document.getElementById('min').innerHTML = ` `
      document.getElementById('max').innerHTML = ` `
      document.getElementById('humidity').innerHTML = ` `
    }
    clearWeatherData()


    //===============================
    // Clears error message, in case there is one.
    //===============================
     function clearErrorMessage(){
       document.getElementById('bad-zip-error-message').innerHTML = ``
     }
     clearErrorMessage()

    //===============================
    // The API call to Open Weather
    //===============================
    function fetchCall(zip){
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=fb1d469d46d8692c83f7c5a6183ad373`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        getWeatherData(response)
      })
      .catch((error) => {
        console.log(error)
        document.getElementById('bad-zip-error-message').innerHTML = `I can't find that zip. Try a different one.`
      })
    }
    fetchCall(zip)

   //===============================
   // // Parsing the weather data from the returned JSON
   //===============================
   function getWeatherData(res){
     let location = res.name
     let currentTemp = Math.round(res.main.temp)
     let tempMin = Math.round(res.main.temp_min)
     let tempMax = Math.round(res.main.temp_max)
     let humidity = res.main.humidity
     let weather = res.weather[0].description

     console.log(location, currentTemp, tempMin, tempMax, humidity, weather)
     updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity)
   }

   //===============================
   // Display weather description
   //===============================
   function updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity) {
     document.getElementById('location').innerHTML = `The weather in ${location}:`
     document.getElementById('weather').innerHTML = `${weather}`
     document.getElementById('current').innerHTML = `Temperature: ${currentTemp} °F`
     document.getElementById('min').innerHTML = `Low: ${tempMin} °F`
     document.getElementById('max').innerHTML = `High: ${tempMax} °F`
     document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`
     updateWeatherGIF();
  }

   //===============================
   // updates the GIF
   //===============================
   function updateWeatherGIF(){

    let weatherDescription = ''

    // In the function updateWeather, #weather is updated with a weather description
    // provided by the API call. Whatever that value is, becomes "weatherDescription".
    weatherDescription = document.getElementById('weather').innerHTML
    // console.log("weatherDescription is: " + weatherDescription)

    var imageGIF = document.querySelector("img");


   // Al Roker in rain
   //  if ((weatherDescription === 'heavy intensity rain') ||
   //      (weatherDescription === 'moderate rain')) {
   //        // console.log('rain Al Roker gif')
   //        imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif')
   //  }
   //  // Claymation rain cloud
   //  else if ((weatherDescription === 'rain') ||
   //          (weatherDescription === 'shower rain') ||
   //          (weatherDescription === 'thunderstorm')) {

   //        imageGIF.setAttribute('src', 'https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif')
   //  }

   //  // Al Roker in light rain
   //  else if ((weatherDescription === 'light rain') ||
   //           (weatherDescription === 'drizzle') ||
   //           (weatherDescription === 'light intensity drizzle') ||
   //           (weatherDescription === 'heavy intensity drizzle')) {
   //             // console.log('light rain & drizzle Al Roker gif')
   //             imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif')
   //           }
   //  // cat flying through sky
   //  else if (weatherDescription === 'clear sky'){
   //    // console.log('clear sky cat gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif')
   //  }
   //  // Al Roker in snow
   //  else if (weatherDescription === 'snow'){
   //    // console.log('snow gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif')
   //  }
   //  // hanging clouds
   //  else if (weatherDescription === 'few clouds') {
   //    // console.log('hanging clouds gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif')
   //  }
   //  // sloth clouds
   //  else if ((weatherDescription === 'broken clouds') ||
   //           (weatherDescription === 'clouds') ||
   //           (weatherDescription === 'scattered clouds')) {
   //             // console.log('sloth clouds gif')
   //            imageGIF.setAttribute('src', 'https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif')
   //  }
   //  // B&W moody cloudy sky
   //  else if (weatherDescription === 'overcast clouds') {
   //    // console.log('soup gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif')
   //  }
   //  // dust gif
   //  else if (weatherDescription === 'dust') {
   //    // console.log('soup gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif')
   //  }
   //  // oscar the grouch
   //  else if (weatherDescription === 'light snow') {
   //    // console.log('oscar light snow gif')
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif')
   //  }
   //  // cup of mist
   //  else if ((weatherDescription === 'mist') ||
   //           (weatherDescription === 'fog')) {
   //    imageGIF.setAttribute('src', 'https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif')
   //  }
   //  // cat smoke
   //  else if ((weatherDescription === 'smoke') ||
   //           (weatherDescription === 'haze')) {
   //             imageGIF.setAttribute('src', 'https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif')
   //  }
   //  // wet cat
   //  else if ((weatherDescription === 'sleet') ||
   //           (weatherDescription === 'shower sleet')) {
   //             imageGIF.setAttribute('src', 'https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif')
   //  }
   // // elm with umbrellas
   //  else if ((weatherDescription === 'rain and snow') ||
   // (weatherDescription === 'light rain and snow') ||
   // (weatherDescription === 'light shower snow') ||
   // (weatherDescription === 'shower snow') ||
   // (weatherDescription === 'heavy shower snow')) {
   //   imageGIF.setAttribute('src', 'https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif')
   //  }


  switch(weatherDescription) {
    case 'heavy intensity rain':
    case 'moderate rain':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif');
      break;
    case 'rain':
    case 'shower rain' :
    case 'thunderstorm' :
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif');
      break;
    case 'light rain':
    case 'drizzle':
    case 'light intensity drizzle':
    case 'heavy intensity drizzle':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif');
      break;
    case 'clear sky':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif')
      break;
    case 'snow':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif');
      break;
    case 'few clouds':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif');
      break;
    case 'clouds':
    case 'broken clouds':
    case 'scattered clouds':
      console.log("clouds, broken clouds, scattered clouds")
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif')
      break;
    case 'overcast clouds':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif');
      break;
    case 'dust':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif')
      break;
    case 'light snow':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif');
      break;
    case 'mist':
    case 'fog':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif')
      break;
    case 'haze':
    case 'smoke':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif')
      break;
    case 'sleet':
    case 'shower sleet':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif')
      break;
    case 'rain and snow':
    case 'light rain and snow':
    case 'light shower snow':
    case 'shower snow':
    case 'heavy shower snow':
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif')
      break;
    default:
      imageGIF.setAttribute('src', 'https://media.giphy.com/media/9n5UIlRppk91e/giphy.gif');;
  }

  }


}

}
)();






