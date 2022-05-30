<template >
  <div id="app">
    <MenuComponent />
    <router-view />
    <!-- :style="image" -->
    <FooterComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    MenuComponent,
    FooterComponent,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e7e7e9;
}
.router-link-active {
  border-bottom: 2px solid #2e8b57;
}
@media (max-width: 992px) {
  .router-link-active {
    border: none;
  }
}
</style>
