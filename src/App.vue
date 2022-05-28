<template>
  <div id="app">
    <MenuComponent />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: "App",
  components: {
    MenuComponent,
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
  border-bottom: 2px solid #2c3e50;
}
</style>
