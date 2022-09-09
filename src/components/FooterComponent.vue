<template>
  <div id="copyright">
    <b-row id="footer">
      <b-col>
        <h2>Firma Okna Pro</h2>
        <p>
          Pozostajemy do Państwa dyspozycji. Zachęcamy do zamówienia bezpłatnej
          wizyty na Twojej inwestycji naszego fachowca, który przygotuje
          indywidualnie dobraną ofertę stolarki budowlanej.
        </p>
        <ul>
          <li>
            <b-icon icon="telephone-fill"></b-icon>
            <p>605 336 336</p>
          </li>
          <li>
            <b-icon icon="mailbox2"></b-icon>
            <p>
              <a href="mailto:biuro@oknapro.pro">biuro@oknapro.pro</a>
            </p>
          </li>
          <li>
            <b-icon icon="pin-fill"></b-icon>
            <p>Lublin ul. Dworska 4</p>
          </li>
        </ul>
      </b-col>
      <b-col>
        <h2>Skontaktuj się z nami</h2>
        <div id="contact">
          <button
            id="fb-button"
            onclick="window.open('https://www.facebook.com/')"
            target="_blank"
          >
            <b-icon id="fb" icon="facebook"> </b-icon>
          </button>
          <button id="write" @click="scrollAndPush">Napisz do nas</button>
        </div>
      </b-col>
      <b-col>
        <h2>Menu</h2>
        <h4>
          <router-link @click.native="scrollToTop" id="path" to="/o-nas"
            >O nas</router-link
          >
        </h4>
        <h4>
          <router-link @click.native="scrollToTop" id="path" to="/serwis"
            >Serwis</router-link
          >
        </h4>
        <h4>
          <router-link @click.native="scrollToTop" id="path" to="/kontakt"
            >Kontakt</router-link
          >
        </h4>
      </b-col>
    </b-row>
    Copyright &copy; Konrad Plichta.
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollAndPush() {
      this.$router.push("kontakt");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
#copyright {
  background-color: #2c3e50;
  color: white;
}
#footer {
  margin: 0;

  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
h1,
h2,
h4 {
  text-align: left;
}
li {
  margin-top: 0;
  display: flex;
}
svg {
  font-size: 20px;
  margin-top: 3px;
  color: white;
}
p,
a {
  text-decoration: none;
  text-align: justify;
  text-indent: 1.5em;
  margin-top: 0;
  color: white;
}
.col {
  padding-top: 30px;
  padding-left: 5%;
}
#fb {
  font-size: 35px;
  color: white;
  margin-top: 1px;
  padding: 2px;
}
#fb-button {
  height: 50px;
  color: white;
  border: 2px solid white;

  background: #2c3e50;
}
#fb-button:hover,
#write:hover {
  background: #2e8b57;
  transition: 0.5s;
  border: 2px solid #2e8b57;
}
#fb:hover {
  transition: 0.5s;
}
#write {
  margin-left: 10px;
  height: 50px;
  width: 130px;
  font-size: 20px;
  color: white;
  background: #2c3e50;
  border: 2px solid white;
  padding: 7px;
}
#contact {
  display: flex;
}
a:hover {
  color: #2e8b57;
  transition: 0.5s;
}
</style>