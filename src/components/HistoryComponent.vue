<template>
  <div id="pathComponent">
    <router-link to="/"> Strona Główna / </router-link>
    <router-link to="/offer"> Oferta / </router-link>
    cos tam
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#pathComponent {
  height: 50px;
  background: -moz-linear-gradient(left, #2e8b57 0%, #c3ddcf 100%);
  background: -webkit-linear-gradient(left, #2e8b57 0%, #c3ddcf 100%);
  background: linear-gradient(to right, #2e8b57 0%, #c3ddcf 100%);
}
</style>