<template>
  <div>
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">Serwis</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <span id="path" style="font-weight: bold">Serwis</span>
      </div>
    </div>
    <div class="blink_me">
      <h1 class="blink">SERWIS CZYNNY 24h/7 DNI W TYGODNIU</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.blink_me {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.blink {
  color: #a7171a;
  font-weight: bold;
}
</style>