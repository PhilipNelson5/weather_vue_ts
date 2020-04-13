import ILocation from "@/interfaces/i-location";
import axios from "axios";

export default class Location {
  public location: ILocation = {
    lat: 0,
    lon: 0,
    city: "city",
    state: "state",
    country: "country"
  };

  constructor() {
    console.log("constructing location");
  }

  public async fetchLocation(): Promise<ILocation> {
    const url =
      "http://api.ipstack.com/check?access_key=4a0b3a029e33fc024e1f617ed6dd23a5";
    return axios.get(url).then(resp => {
      const location: ILocation = {
        country: resp.data.country_name,
        state: resp.data.region_name,
        city: resp.data.city,
        lat: Number.parseFloat(resp.data.latitude),
        lon: Number.parseFloat(resp.data.longitude)
      };
      return location;
    });
  }
}
