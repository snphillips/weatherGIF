/* ===============================
updates the GIF
 =============================== */
export default function updateWeatherGIF(weather, currentTemp, humidity) {
  try {
    // Getting data from parseWeatherData
    console.log(
      "weather: ",
      weather,
      "temperature: ",
      currentTemp,
      "humidity:",
      humidity
    );
    var imageGIF = document.querySelector("img");

    // Al Roker in rain
    if (weather === "heavy intensity rain" || weather === "moderate rain") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif"
      );
    }
    // Claymation rain cloud
    else if (weather === "rain") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif"
      );
    }
    // Guy with remote control
    else if (weather === "shower rain") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l4FGkdtLGfpUiBdFC/giphy.gif"
      );
    }
    // Thunderstorm in coffee cup
    else if (weather === "thunderstorm") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3oEjIa5lbVSfv8a9s4/giphy.gif"
      );
    }
    // Al Roker in light rain
    else if (
      weather === "light rain" ||
      weather === "drizzle" ||
      weather === "light intensity drizzle"
    ) {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif"
      );
    }
    // woman in bathing suit, on ground with rain
    else if (weather === "heavy intensity drizzle") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/26ufcMjwXjpTHNG1i/giphy.gif"
      );
    }
    // cat flying through sky
    else if (weather === "clear sky" || weather === "sky is clear") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"
      );
    }
    // Kramer turkey
    // TODO: fix weather descriptions
    else if (currentTemp > 90) {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/5xqKWd6761tkY/giphy.gif"
      );
    }
    // slipping penguin
    // TODO: fix weather descriptions
    else if (currentTemp < 25) {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/BvBEozfsXWWHe/giphy.gif"
      );
    }
    // melting popcicle
    else if (
      (weather === "clear sky" ||
        weather === "sky is clear" ||
        weather === "few clouds" ||
        weather === "broken clouds" ||
        weather === "scattered clouds") &&
      humidity > 80
    ) {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUA7b0fCaEIjdwJXTa/giphy.gif"
      );
    }
    // Al Roker in snow
    else if (weather === "snow") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif"
      );
    }
    // hanging rocking clouds
    else if (weather === "few clouds") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif"
      );
    }
    // sloth clouds
    else if (weather === "clouds" || weather === "scattered clouds") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif"
      );
    }
    // cloud falls on lady
    else if (weather === "broken clouds") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif"
      );
    }
    // B&W moody cloudy sky
    else if (weather === "overcast clouds") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif"
      );
    }
    // dust gif
    else if (weather === "dust") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif"
      );
    }
    // oscar the grouch
    else if (weather === "light snow") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif"
      );
    }
    // cup of mist
    else if (weather === "mist" || weather === "fog") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif"
      );
    }
    // cat smoke
    else if (weather === "haze") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif"
      );
    }
    // cousin itt smoking
    else if (weather === "smoke") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/5xtDarLUQd5DqgXHJks/giphy.gif"
      );
    }
    // wet cat
    else if (weather === "sleet" || weather === "shower sleet") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif"
      );
    }
    // elves with umbrellas
    else if (
      weather === "rain and snow" ||
      weather === "light rain and snow" ||
      weather === "light shower snow" ||
      weather === "shower snow"
    ) {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif"
      );
    }
    // spinning slushy. replace this one
    else if (weather === "heavy shower snow") {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l378an2e0zaQWvSZW/giphy.gif"
      );
    }
    // Dog digging on moon
    else {
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/iqtppTG9X8lwTKda0F/giphy.gif"
      );
    }
  } catch (error) {
    console.log(error);
  }
}