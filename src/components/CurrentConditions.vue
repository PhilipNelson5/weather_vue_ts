<template>
  <div>
    <h3>Current Conditions</h3>
    <p>
      Fetched on {{ currentConditions.date }} at
      {{ currentConditions.time }}
    </p>
    <ul>
      <li>Temperature: {{ currentConditions.temperature }}°F</li>
      <li>High: {{ currentConditions.high }}°F</li>
      <li>Low: {{ currentConditions.low }}°F</li>
      <li>Condition: {{ currentConditions.desc }}</li>
      <li>Humidity: {{ currentConditions.humidity }}%</li>
      <li>Pressure: {{ currentConditions.pressure }}hPa</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GETTERS } from "@/store/store";

@Component({
  computed: {
    currentConditions: {
      get() {
        return this.$store.getters[GETTERS.CURRENT_CONDITION];
      }
    }
  }
})
export default class CurrentConditions extends Vue {}
</script>

<style scoped>
div {
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
