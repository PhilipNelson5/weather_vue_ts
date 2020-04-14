<template>
  <div class="box">
    <h3>5 Day Forecast</h3>
    <div class="box2" v-for="(f, index) in forecasts" :key="index">
      <p>Forecast for: {{ f.time }}</p>
      <ul>
        <li>Temperature: {{ f.temperature }}°F</li>
        <li>Humidity: {{ f.humidity }}%</li>
        <li>Pressure: {{ f.pressure }}hPa</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GETTERS } from "../store/store";

@Component({
  computed: {
    forecasts: {
      get() {
        return this.$store.getters[GETTERS.FORECAST];
      }
    }
  }
})
export default class Forecast extends Vue {}
</script>

<style scoped>
.box {
  background-color: #bcc1ba;
  border-radius: 5px;
  margin: 1em;
  padding: 1px;
}
.box2 {
  background-color: #9fb7b9;
  border-radius: 5px;
  margin: 1em;
  padding: 1px;
}
ul {
  display: inline-block;
  text-align: left;
}
</style>
