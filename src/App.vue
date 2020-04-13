<template>
  <div id="app">
    <TitleBar />
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

@Component({
  components: {
    TitleBar,
    Location,
    CurrentConditions,
    Forecast
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
