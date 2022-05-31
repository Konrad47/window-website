<template>
  <div>
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">Kontakt</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <span id="path">Kontakt</span>
      </div>
    </div>
    <b-card>
      <b-container>
        <b-row>
          <b-col id="col-1">
            <h1>Firma Okna Pro</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptatibus, eaque perferendis minima nisi corrupti
              maiores fugit nostrum consequatur molestias saepe beatae magnam
              corporis facere distinctio assumenda doloremque. Expedita, ipsum!
            </p>
          </b-col>
          <b-col>
            <ul>
              <li>
                <b-icon icon="telephone-fill"></b-icon>
                <p>123 123 123</p>
              </li>
              <li>
                <b-icon icon="mailbox2"></b-icon>
                <p>
                  <a href="mailto:oknaprolublin@gmail.com"
                    >oknaprolublin@gmail.com</a
                  >
                </p>
              </li>
              <li>
                <b-icon icon="pin-fill"></b-icon>
                <p>Lublin ul. Cośtam 3</p>
              </li>
              <li>
                <b-icon icon="clock-fill"></b-icon>
                <p>123 123 123</p>
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
              <l-marker :lat-lng="markerLatLng" :icon="icon"></l-marker>
            </l-map>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  data() {
    return {
      zoom: 11,
      center: [51.25, 22.56667],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLatLng: [51.25444444, 22.56667444],
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
  },
};
</script>

<style scoped>
/* .card {
  padding-bottom: 150px;
} */
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
ul {
  padding-left: 0;
}
li {
  margin-top: 0;
  display: flex;
}
svg {
  font-size: 20px;
  margin-top: 5px;
  color: #2e8b57;
}
@media (max-width: 800px) {
  .row {
    display: inline;
  }
}
</style>