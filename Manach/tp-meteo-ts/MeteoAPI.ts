class MeteoAPI {
  private API_KEY: string = "888f70e84a4d7e44f3c0d4870c926e9d";

  private METEO_URL: string =
    "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID={API_KEY}&units=metric";

  constructor() {}

  public async search(value: string) {
    const jsonMeteo = await this.loadMeteo(value);
    return jsonMeteo;
  }

  async loadMeteo(ville: string): Promise<any> {
    const url = this.METEO_URL.replace("{VILLE}", ville).replace(
      "{API_KEY}",
      this.API_KEY
    );

    const response = await fetch(url);
    const json = await response.json();

    return json;
  }
}
