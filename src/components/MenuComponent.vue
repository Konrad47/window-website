<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" variant="faded">
      <b-navbar-brand id="nav-img" :to="{ name: 'home' }">
        <img src="../assets/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle id="nav-toggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'service' }" id="nav-item"
            ><span class="service">Serwis 24/7</span></b-nav-item
          >
          <b-nav-item :to="{ name: 'aboutUs' }" id="nav-item">O nas</b-nav-item>
          <b-nav-item-dropdown id="nav-item" text="Oferta" right>
            <b-dropdown-item :to="{ name: 'offer' }"
              >Stolarka aluminiowa</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'offerPcv' }"
              >Stolarka PCV</b-dropdown-item
            >
            <!-- <b-dropdown-item :to="{ name: 'offerDoor' }"
              >Drzwi aluminiowe</b-dropdown-item
            > -->
          </b-nav-item-dropdown>
          <b-nav-item :to="{ name: 'contact' }" id="nav-item"
            >Kontakt</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style scoped>
#navbar {
  color: #e7e7e9;
  box-shadow: 0 0 1em gray;
  padding-right: 10px;
  padding-left: 10px;
}
#nav-item {
  font-size: 20px;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding-right: 20px;
}
#nav-collapse {
  justify-content: right;
  padding-right: 80px;
}
.navbar-collapse {
  text-align: left;
}
img {
  width: 70px;
}
#nav-img {
  border: none;
}
.service {
  font-style: italic;
  color: #a7171a !important;
  font-weight: bold !important;
}
.service:hover {
  animation: blinker 0.5s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>