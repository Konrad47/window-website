<template>
  <div id="windows">
    <b-card-group v-for="(window, i) in getWindows" :key="i">
      <b-card
        border-variant="secondary"
        :header="getWindows[i].size"
        :title="getWindows[i].name"
        :img-src="getWindows[i].image1"
        img-top
      >
        <b-card-text> </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "OfferView",
  computed: {
    getWindows() {
      return this.$store.state.windows;
    },
  },
  created() {
    console.log(this.getWindows);
  },
};
</script>

<style scoped>
.card {
  margin: 20px;
  box-shadow: 0 0 0.5em gray;
}
#windows {
  display: inline-grid;
  grid-template-columns: auto auto;
  width: auto;
}
@media (max-width: 1200px) {
  #windows {
    display: inline-grid;
    grid-template-columns: auto;
    width: auto;
  }
}
</style>