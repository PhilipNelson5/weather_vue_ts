<template>
  <div>
    <h3>Your Location</h3>
    <p>
      You are in {{ location.city }}, {{ location.state }},
      {{ location.country }}
    </p>
    <p>({{ location.lat }}, {{ location.lon }})</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GETTERS, ACTIONS } from "@/store/store";

@Component({
  computed: {
    location: {
      get() {
        return this.$store.getters[GETTERS.LOCATION];
      }
    }
  }
})
export default class Location extends Vue {
  created() {
    this.$store.dispatch(ACTIONS.FETCH_LOCATION);
  }
}
</script>

<style scoped>
div {
  background-color: #84c0c6;
  border-radius: 5px;
  margin: 1em;
  padding: 1px;
}
</style>
