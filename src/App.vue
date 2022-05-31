<template >
  <div id="app">
    <MenuComponent />
    <!-- <HistoryComponent /> -->
    <router-view :style="image" />
    <FooterComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// import HistoryComponent from "@/components/HistoryComponent.vue";
export default {
  name: "App",
  components: {
    MenuComponent,
    FooterComponent,
    // HistoryComponent,
  },
  data() {
    return {
      image: {
        backgroundImage: `url(${require("@/assets/1.jpg")})`,
        width: "100%",
        height: "100%",
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
template,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-color: #e7e7e9;
  /* background-image: url("@/assets/1.jpg"); */
}
body {
  /* :style="image" */
}
#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e7e7e9;
}
.router-link-active {
  border-bottom: 2px solid #2e8b57;
}
#pathComponent {
  justify-content: space-between;
  display: flex;
  height: 70px;
  background: -moz-linear-gradient(left, #2e8b57 0%, #bdd97d 100%);
  background: -webkit-linear-gradient(left, #2e8b57 0%, #bdd97d 100%);
  background: linear-gradient(to right, #2e8b57 0%, #bdd97d 100%);
  padding: 20px;
  font-size: 20px;
  /* #BDD97D */
}
#pathLeft {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.1rem;
}
#path {
  text-decoration: none;
  color: white;
  /* font-weight: bold; */
  border: none;
}
@media (max-width: 992px) {
  .router-link-active {
    border: none;
  }
}
</style>
