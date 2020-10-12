"use strict";
class MeteoDOM {
    showLoader(visible) {
        let loader = document.getElementById("loader-container");
        if (loader) {
            loader.style.visibility = visible ? "visible" : "hidden";
        }
    }
    parseResult(json) {
        let weather_title = document.getElementById("weather-title");
        if (weather_title) {
            weather_title.innerHTML = "";
            weather_title.style.visibility = "visible";
        }
        let weather_results = document.getElementById("weather-results");
        if (weather_results) {
            weather_results.innerHTML = "";
            weather_results.style.visibility = "visible";
        }
        if (json) {
            let google = "https://www.google.com/maps/?q={LAT},{LON}";
            google = google
                .replace("{LAT}", json.city.coord.lat)
                .replace("{LON}", json.city.coord.lon);
            let link = "<a href='" + google + "' target='_blank'>" + json.city.name + "</a>";
            let title = "Résultat pour '" + link + "' ";
            title +=
                "(coordonnées : " +
                    json.city.coord.lat +
                    ", " +
                    json.city.coord.lon +
                    ")";
            title += " - population : " + json.city.population + " habitants";
            if (weather_title) {
                weather_title.innerHTML = title;
            }
            for (let i = 0; i < json.list.length; i++) {
                let div = document.createElement("div");
                let weath = json.list[i];
                let image = document.createElement("img");
                image.src = weath.main.humidity < 80 ? "sun.png" : "rain.png";
                let p = document.createElement("p");
                div.className = "item-weather";
                div.style.animationDelay = i * 100 + "ms";
                let texte = "DATE : " +
                    weath.dt_txt +
                    " <br>Température : " +
                    weath.main.temp +
                    " <br>Humidité : " +
                    weath.main.humidity +
                    " %";
                p.innerHTML = texte;
                div.appendChild(image);
                div.appendChild(p);
                if (weather_results) {
                    weather_results.appendChild(div);
                }
            }
        }
    }
}
