<template>
  <div>
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">Kontakt</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <span id="path" style="font-weight: bold">Kontakt</span>
      </div>
    </div>
    <b-card>
      <b-container>
        <b-row>
          <b-col cols="9" id="col-1">
            <h1>Firma Okna Pro</h1>
            <p>
              Pozostajemy do Państwa dyspozycji. Zachęcamy do zamówienia
              bezpłatnej wizyty na Twojej inwestycji naszego fachowca, który
              przygotuje indywidualnie dobraną ofertę stolarki budowlanej.
            </p>
          </b-col>
          <b-col>
            <ul>
              <li>
                <b-icon icon="telephone-fill"></b-icon>
                <ul>
                  <p class="p-nested">605 336 336,</p>
                  <p class="p-nested">512 985 986</p>
                </ul>
              </li>
              <li>
                <b-icon icon="mailbox2"></b-icon>
                <ul>
                  <p class="p-nested">
                    <a href="mailto:biuro@oknapro.pro">biuro@oknapro.pro,</a>
                  </p>
                  <p class="p-nested">
                    <a href="mailto:serwis@oknapro.pro">serwis@oknapro.pro</a>
                  </p>
                </ul>
              </li>
              <li>
                <b-icon icon="pin-fill"></b-icon>
                <p>Lublin ul. Dworska 4</p>
              </li>
              <li>
                <b-icon icon="clock-fill"></b-icon>
                <ul>
                  <p id="open">Godziny otwarcia</p>
                  <p id="open">pn-pt: 9:00 - 17:00</p>
                  <p id="open">sb: 9:00 - 14:00</p>
                </ul>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <l-map
              style="height: 400px; width: 100%"
              :zoom="zoom"
              :center="center"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
              <l-control position="topright">
                <button
                  onclick="window.open('https://www.google.com/maps/dir//M%26D+Auto.+PHU.+Obara+m.,+Dworska+4,+20-135+Lublin/@51.2621887,22.5834534,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47225735f7ac9381:0x8d1ff1e764d31522!2m2!1d22.5861914!2d51.2622123')"
                  target="_blank"
                >
                  SPRAWDŹ DOJAZD
                </button>
              </l-control>
              <l-marker
                :lat-lng="markerLatLng"
                :icon="icon"
                style="color: #2e8b57"
              ></l-marker>
            </l-map>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  data() {
    return {
      zoom: 13,
      center: [51.2621388, 22.5863249],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLatLng: [51.2621388, 22.5863249],
      icon: icon({
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        iconSize: [20, 30],
        iconAnchor: [16, 37],
      }),
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
  },
};
</script>

<style scoped>
#col-1 {
  justify-content: left;
  padding-right: 100px;
}
h1 {
  text-align: left;
  color: #2e8b57;
  font-weight: bold;
}
p,
a {
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
  text-align: justify;
  text-indent: 1.5em;
  margin-top: 0;
}
.p-nested {
  margin: 0;
}
a:hover {
  color: #2e8b57;
  transition: 0.5s;
}
ul {
  padding-left: 0;
}
li {
  margin-top: 0;
  margin-bottom: 10px;
  display: flex;
}
svg {
  font-size: 20px;
  margin-top: 5px;
  color: #2e8b57;
}
#open {
  margin: 0;
}
button {
  background: #2e8b57;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: BOLD;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  letter-spacing: 0.1rem;
}
</style>