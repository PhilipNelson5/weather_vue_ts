import axios from "axios";
import ICurrentCondition from "@/interfaces/i-current-condition";
import IForecast from "@/interfaces/i-forecast";

const baseurl = "http://api.openweathermap.org";

export default class Weather {
  public currentConditions: ICurrentCondition = {
    date: "",
    time: "",
    temperature: "",
    high: "",
    low: "",
    desc: "",
    humidity: "",
    pressure: ""
  };

  public forecast: Array<IForecast> = [];

  constructor() {
    console.log("connstructing weather");
  }

  public async fetchCurrentConditions(
    lat: number,
    lon: number
  ): Promise<ICurrentCondition> {
    const url = `${baseurl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=6d50188dd5f72db7d6214feea3af2992`;
    return axios.get(url).then(resp => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const currentConditions: ICurrentCondition = {
        date: `${month}\\${day}\\${year}`,
        time: currentDate.toLocaleTimeString(),
        temperature: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        desc:
          resp.data.weather.length > 0
            ? resp.data.weather[0].description
            : "Unknown",
        humidity: resp.data.main.humidity,
        pressure: resp.data.main.pressure
      };

      return currentConditions;
    });
  }

  public async fetchForecast(
    lat: number,
    lon: number
  ): Promise<Array<IForecast>> {
    const url = `${baseurl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=6d50188dd5f72db7d6214feea3af2992`;
    return axios.get(url).then(resp => {
      return resp.data.list.map(
        (item: any): IForecast => {
          return {
            time: this.toDate(item.dt),
            humidity: item.main.humidity,
            pressure: item.main.pressure,
            temperature: item.main.temp
          };
        }
      );
    });
  }

  private toDate(sec: number): string {
    const d = new Date(0);
    d.setUTCSeconds(sec);
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
  }
}
