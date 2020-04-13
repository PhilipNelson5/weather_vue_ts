<template>
  <div>
    <h2 class="shadow">Weather App</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TitleBar extends Vue {}
</script>

<style scoped>
div {
  background-color: #46b1c9;
  border-radius: 5px;
  margin: 1em;
  padding: 1px;
}
.shadow {
  color: aliceblue;
  text-shadow: 2px 2px #1a1a1a;
}
</style>
