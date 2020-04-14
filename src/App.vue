<template>
  <div id="app">
    <TitleBar />
    <ErrorDisplay />
    <Location />
    <CurrentConditions />
    <Forecast />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBar from "@/components/TitleBar.vue";
import Location from "@/components/Location.vue";
import CurrentConditions from "@/components/CurrentConditions.vue";
import Forecast from "@/components/Forecast.vue";
import ErrorDisplay from "@/components/ErrorDisplay.vue";

@Component({
  components: {
    TitleBar,
    Location,
    CurrentConditions,
    Forecast,
    ErrorDisplay
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
