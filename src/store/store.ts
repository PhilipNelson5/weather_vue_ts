import Vue from "vue";
import Vuex from "vuex";
import Location from "@/store/location";
import ILocation from "@/interfaces/i-location";
import ICurrentCondition from "@/interfaces/i-current-condition";
import Weather from "./weather";
import IForecast from "@/interfaces/i-forecast";

Vue.use(Vuex);

export const MUTATIONS = {
  SET_LOCATION: "SET_LOCATION",
  SET_CURRENT_CONDITION: "SET_CURRENT_CONDITION",
  SET_FORECAST: "SET_FORECAST",
  SET_ERROR: "SET_ERROR"
};

export const ACTIONS = {
  FETCH_LOCATION: "FETCH_LOCATION",
  FETCH_CURRENT_CONDITION: "FETCH_CURRENT_CONDITION",
  FETCH_FORECAST: "FETCH_FORECAST"
};

export const GETTERS = {
  LOCATION: "LOCATION",
  CURRENT_CONDITION: "CURRENT_CONDITION",
  FORECAST: "FORECAST",
  ERROR: "ERROR"
};

export default new Vuex.Store({
  state: {
    location: new Location(),
    weather: new Weather(),
    error: ""
  },
  mutations: {
    [MUTATIONS.SET_LOCATION]: (state, location: ILocation) => {
      state.location.location = location;
    },
    [MUTATIONS.SET_CURRENT_CONDITION]: (
      state,
      currentConditions: ICurrentCondition
    ) => {
      state.weather.currentConditions = currentConditions;
    },
    [MUTATIONS.SET_FORECAST]: (state, forecast: Array<IForecast>) => {
      state.weather.forecast = forecast;
    },
    [MUTATIONS.SET_ERROR]: (state, msg: string) => {
      state.error = msg;
    }
  },
  actions: {
    [ACTIONS.FETCH_LOCATION]: async ({ state, commit, dispatch }) => {
      state.location.fetchLocation().then((location: ILocation) => {
        if (Number.isNaN(location.lat) || Number.isNaN(location.lon)) {
          commit(
            MUTATIONS.SET_ERROR,
            "COULD NOT FETCH LOCATION\nYou may need to turn off add blockers\nor\nenable mixed HTTP/HTTPS content for this page"
          );
        } else {
          commit(MUTATIONS.SET_LOCATION, location);
          dispatch(ACTIONS.FETCH_CURRENT_CONDITION);
          dispatch(ACTIONS.FETCH_FORECAST);
        }
      });
    },
    [ACTIONS.FETCH_CURRENT_CONDITION]: async ({ state, commit }) => {
      state.weather
        .fetchCurrentConditions(
          state.location.location.lat,
          state.location.location.lon
        )
        .then((currentConditions: ICurrentCondition) => {
          commit(MUTATIONS.SET_CURRENT_CONDITION, currentConditions);
        });
    },
    [ACTIONS.FETCH_FORECAST]: async ({ state, commit }) => {
      state.weather
        .fetchForecast(state.location.location.lat, state.location.location.lon)
        .then((forecast: Array<IForecast>) => {
          commit(MUTATIONS.SET_FORECAST, forecast);
        });
    }
  },
  getters: {
    [GETTERS.LOCATION]: state => {
      return state.location.location;
    },
    [GETTERS.CURRENT_CONDITION]: state => {
      return state.weather.currentConditions;
    },
    [GETTERS.FORECAST]: state => {
      return state.weather.forecast;
    },
    [GETTERS.ERROR]: state => {
      return state.error;
    }
  }
});
