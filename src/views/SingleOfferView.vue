<template>
  <div>
    <div id="pathComponent">
      <div id="pathLeft">
        <span id="path">{{ getWindow.size }}</span>
      </div>
      <div id="pathRight">
        <router-link id="path" to="/"> Strona Główna / </router-link>
        <router-link id="path" to="/stolarka-aluminiowa">
          Stolarka aluminiowa /
        </router-link>
        <span id="path" style="font-weight: bold">{{
          getWindow.routerName
        }}</span>
      </div>
    </div>
    <div id="element">
      <b-card border-variant="secondary">
        <b-container class="bv-example-row bv-example-row-flex-cols">
          <b-row>
            <b-col align-self="baseline">
              <div>
                <b-img id="img1" :src="getWindow.image1" width="512"></b-img>
              </div>
              <p id="link">
                {{ getWindow.linkdesc[0].name }}
                <a id="pdf" :href="getWindow.link[0].name" target="_blank"
                  >POBIERZ</a
                >
              </p>
            </b-col>
            <b-col align-self="stretch">
              <h1>{{ getWindow.size }}</h1>
              <h4>{{ getWindow.name }}</h4>
              <!-- <p
              class="mb-0"
              v-for="(description, i) in getWindow.description"
              :key="i"
            >
              {{ description.name }}
            </p> -->
              <p>{{ getWindow.description[0].name }}</p>
              <h4>{{ getWindow.description2 }}</h4>
              <ul v-for="(dot, i) in getWindow.dots" :key="i">
                <li>{{ dot.name }}</li>
              </ul>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h5>{{ getWindow.descriptionOfTable }}</h5>
              <table v-if="getWindow.isTableHere == true">
                <tr v-for="(table, i) in getWindow.table" :key="i">
                  <td>{{ table.name }}</td>
                  <td>{{ table.value }}</td>
                </tr>
              </table>
              <p id="des3" v-else>{{ getWindow.description3 }}</p>
            </b-col>
            <b-col>
              <div>
                <b-img id="img1" :src="getWindow.image2" width="512"></b-img>
              </div>
              <p id="link" v-if="getWindow.linkdesc.length == 2">
                {{ getWindow.linkdesc[1].name }}
                <a id="pdf" :href="getWindow.link[1].name" target="_blank"
                  >POBIERZ</a
                >
              </p>
            </b-col>
          </b-row>
        </b-container>
        <b-media right-left vertical-align="center">
          <template #aside> </template>
        </b-media>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "routerName"],
  name: "SingleOfferView",
  computed: {
    getWindow() {
      return this.$store.state.windows[this.id - 1];
    },
  },
  created() {
    console.log(this.getWindow);
  },
};
</script>

<style scoped>
#element {
  padding-top: 20px;
  padding-bottom: 20px;
}
.card {
  width: 80%;
  margin: auto;
  box-shadow: 0 0 0.5em #2c3e50;
  opacity: 90%;
}
.col {
  padding: 10px;
}
h1,
h4 {
  text-align: left;
  color: #2e8b57;
  font-weight: bold;
  margin-bottom: 20px;
}
h5 {
  color: #2e8b57;
  font-weight: bold;
}
p {
  font-size: 20px;
  text-align: justify;
  text-indent: 1.5em;
  margin-top: 0;
}
#des3 {
  /* border: 2px solid #2e8b57; */
  font-size: 20px;
  margin-top: 80px;
  margin-left: 55px;
  max-width: 512px;
}
li {
  font-size: 18px;
  text-align: left;
  margin: -10px;
}
img {
  margin: 10px;
}
#link {
  text-align: center;
}
#pdf {
  text-decoration: none;
  color: #2e8b57;
  font-weight: bold;
}
table,
th,
td {
  border: 2px solid #2c3e50;
  text-align: left;
  padding: 10px;
}
table {
  margin: auto;
}
@media (max-width: 960px) {
  #des3 {
    margin: auto;
  }
}
@media (max-width: 750px) {
  img {
    width: 384px;
  }
}
@media (max-width: 600px) {
  img {
    width: 230px;
  }
}
</style>