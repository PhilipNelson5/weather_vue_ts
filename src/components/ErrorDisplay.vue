<template>
  <div v-show="error != ''">
    <h2>{{ error }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GETTERS } from "../store/store";

@Component({
  computed: {
    error: {
      get() {
        return this.$store.getters[GETTERS.ERROR];
      }
    }
  }
})
export default class ErrorDisplay extends Vue {}
</script>

<style scoped>
h2 {
  white-space: pre-line;
}
div {
  background-color: #ff4f4f;
  border-radius: 5px;
  margin: 1em;
  padding: 1px;
}
</style>
