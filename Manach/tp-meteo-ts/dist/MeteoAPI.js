"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MeteoAPI {
    constructor() {
        this.API_KEY = "888f70e84a4d7e44f3c0d4870c926e9d";
        this.METEO_URL = "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID={API_KEY}&units=metric";
    }
    search(value) {
        return __awaiter(this, void 0, void 0, function* () {
            /* version promise */
            /*
        const url = this.METEO_URL.replace("{VILLE}", ville).replace(
            "{API_KEY}",
            this.apiKey
          );
        fetch(url).then(result => {
          if (result) {
            result.json().then(json => {
              loader.style.visibility = "hidden";
              this.parseResponse(json);
            });
          }
        });*/
            const jsonMeteo = yield this.loadMeteo(value);
            return jsonMeteo;
        });
    }
    loadMeteo(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.METEO_URL.replace("{VILLE}", ville).replace("{API_KEY}", this.API_KEY);
            const response = yield fetch(url);
            const json = yield response.json();
            return json;
        });
    }
}
