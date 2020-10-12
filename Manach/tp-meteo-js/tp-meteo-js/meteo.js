let API_KEY = "888f70e84a4d7e44f3c0d4870c926e9d";
let METEO_URL =
  "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID={API_KEY}&units=metric";

function meteoSearchHandler(event) {
  if (event && (!event.keyCode || event.keyCode == 13)) {
    var ville = document.querySelector("#meteo-ti").value;
    search(ville);
  }
}

function meteoClickHandler(event) {
  var ville = document.getElementById("meteo-ti").value;
  search(ville);
}

function search(ville) {
  if (ville === null || ville.length < 2) {
    return;
  }

  document.getElementById("loader-container").style.visibility = "visible";
  document.getElementById("error-container").style.visibility = "hidden";

  var url = METEO_URL.replace("{VILLE}", ville).replace("{API_KEY}", API_KEY);

  fetch(url)
    .then((response) => {
      document.getElementById("loader-container").style.visibility = "hidden";
      response
        .json()
        .then((result) => {
          console.info("result ", result);
          parseResponse(result);
        })
        .catch((error) => {
          console.error("error ", error);
        });
    })
    .catch((error) => {
      document.getElementById("loader-container").style.visibility = "hidden";

      document.getElementById("error-container").style.visibility = "visible";

      setTimeout(() => {
        document.getElementById("error-container").style.visibility = "hidden";
      }, 3000);
      console.error("error ", error);
    });
}

function parseResponse(value) {
  console.info("parseResponse ", value);
  let json = value;

  let weather_title = document.getElementById("weather-title");
  weather_title.innerHTML = "";
  weather_title.style.visibility = "visible";

  let weather_results = document.getElementById("weather-results");
  weather_results.innerHTML = "";
  weather_results.style.visibility = "visible";

  if (json != null) {
    let google = "https://www.google.com/maps/?q={LAT},{LON}";
    google = google
      .replace("{LAT}", json.city.coord.lat)
      .replace("{LON}", json.city.coord.lon);

    let link =
      "<a href='" + google + "' target='_blank'>" + json.city.name + "</a>";
    let title = "Résultat pour '" + link + "' ";
    title +=
      "(coordonnées : " +
      json.city.coord.lat +
      ", " +
      json.city.coord.lon +
      ")";
    title += " - population : " + json.city.population + " habitants";

    weather_title.innerHTML = title;

    console.info("castor 3");
    for (let i = 0; i < json.list.length; i++) {
      console.info("i ", i);
      let div = document.createElement("div");
      let weath = json.list[i];

      let image = document.createElement("img");
      image.src = weath.main.humidity < 80 ? "sun.png" : "rain.png";

      let p = document.createElement("p");
      div.className = "item-weather";
      div.style["animation-delay"] = i * 1000 + "ms";

      let texte =
        "DATE : " +
        weath.dt_txt +
        " <br>Température : " +
        weath.main.temp +
        " <br>Humidité : " +
        weath.main.humidity +
        " %";
      p.innerHTML = texte;

      div.appendChild(image);
      div.appendChild(p);

      weather_results.appendChild(div);
    }
  }
}
