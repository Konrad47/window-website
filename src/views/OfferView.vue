<template>
  <div id="windows">
    <b-card-group v-for="(window, i) in getWindows" :key="i">
      <router-link
        :to="{
          name: 'singleOffer',
          params: { id: getWindows[i].id },
        }"
      >
        <b-card
          border-variant="secondary"
          :header="getWindows[i].size"
          :title="getWindows[i].name"
          :img-src="getWindows[i].image1"
          img-top
          style="max-width: 18rem"
        >
          <b-card-text> </b-card-text>
        </b-card>
      </router-link>
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
  box-shadow: 0 0 0.5em #2c3e50;
}
.card-header {
  color: #2e8b57;
  font-size: x-large;
  font-weight: bold;
}
.card-title {
  color: #2c3e50;
}
#windows {
  justify-content: center;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  width: auto;
}
a {
  text-decoration: none;
}
@media (max-width: 1200px) {
  #windows {
    display: inline-grid;
    grid-template-columns: auto auto;
    width: auto;
  }
}
@media (max-width: 800px) {
  #windows {
    display: inline-grid;
    grid-template-columns: auto;
    width: auto;
  }
}
</style>