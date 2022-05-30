<template>
  <div>
    <b-card border-variant="secondary">
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row>
          <b-col align-self="baseline">
            <div>
              <b-img id="img1" :src="getWindow.image1" width="512"></b-img>
            </div>
            <!-- <p id="link" v-for="(link, i) in getWindow.linkdesc" :key="i">
              {{ link.name }} <a :href="getWindow.link[i].name">POBIERZ</a>
            </p> -->
            <p id="link">
              {{ getWindow.linkdesc[0].name }}
              <a :href="getWindow.link[0].name">POBIERZ</a>
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
            <p v-else>{{ getWindow.description3 }}</p>
          </b-col>
          <b-col>
            <div>
              <b-img id="img1" :src="getWindow.image2" width="512"></b-img>
            </div>
            <p id="link" v-if="getWindow.linkdesc.length == 2">
              {{ getWindow.linkdesc[1].name }}
              <a :href="getWindow.link[1].name">POBIERZ</a>
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-media right-left vertical-align="center">
        <template #aside> </template>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
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
.card {
  width: 80%;
  margin: auto;
  margin-top: 10px;
  box-shadow: 0 0 0.5em #2c3e50;
}
.col {
  padding: 10px;
}
h1,
h4 {
  text-align: left;
  color: #2e8b57;
  font-weight: bold;
}
h5 {
  color: #2e8b57;
  font-weight: bold;
}
p {
  text-align: left;
  text-indent: 1.5em;
  margin-top: 0;
}
li {
  text-align: left;
  margin-top: 0;
}
img {
  margin: 10px;
}
#link {
  text-align: center;
}
a {
  text-decoration: none;
  color: #2e8b57;
  font-weight: bold;
}
table,
th,
td {
  border: 2px solid #2c3e50;
  text-align: left;
}
table {
  margin: auto;
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