
      let API_KEY = "888f70e84a4d7e44f3c0d4870c926e9d";
      let METEO_URL =
        "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID={API_KEY}&units=metric";

      function testAPI() {
        let url = METEO_URL.replace("{VILLE}", "brest").replace(
          "{API_KEY}",
          API_KEY
        );

        fetch(url)
          .then((response) => {
            response.json().then((result) => {
              console.info("info ", result);
            });
          })
          .catch((error) => {
            console.error("error ", error);
          });
      }

