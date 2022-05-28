<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" variant="faded">
      <b-navbar-brand id="nav-img" :to="{ name: 'home' }">
        <img src="../assets/logo.png" />
      </b-navbar-brand>

      <b-navbar-toggle id="nav-toggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'aboutUs' }" id="nav-item">O nas</b-nav-item>
          <b-nav-item :to="{ name: 'offer' }" id="nav-item">Oferta</b-nav-item>
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
  /* background: #697dac; */
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
  width: 50px;
}
#nav-img {
  border: none;
}
</style>