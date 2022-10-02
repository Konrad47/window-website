<template>
  <div id="el" :style="image">
    <b-container>
      <b-row>
        <b-col class="logo-col">
          <div class="logo-window">
            <div>
              <img :src="image1" />
            </div>
            <div>
              <img :src="image2" />
            </div>
            <h1>Okna PCV i ALUMINIUM</h1>
          </div>
        </b-col>
        <b-col>
          <div id="carousel">
            <b-carousel
              id="carousel-1"
              style="text-shadow: 0px 0px 2px #000"
              v-model="slide"
              controls
              background="#ababab"
              label-next
              label-prev
              indicators="true"
              label-indicators
              fade
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide :img-src="image4"></b-carousel-slide>
              <b-carousel-slide :img-src="image5"></b-carousel-slide>
              <b-carousel-slide :img-src="image6"></b-carousel-slide>
              <b-carousel-slide :img-src="image7"></b-carousel-slide>
              <b-carousel-slide :img-src="image8"></b-carousel-slide>
              <b-carousel-slide :img-src="image9"></b-carousel-slide>
              <b-carousel-slide :img-src="image3"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      image: {
        backgroundImage: `url(${require("@/assets/2.png")})`,
        width: "100%",
        height: "100%",
      },
      image1: require("@/assets/home/aluron.svg"),
      image2: require("@/assets/home/schueco.png"),
      image3: require("@/assets/slider/1.jpg"),
      image4: require("@/assets/slider/2.jpg"),
      image5: require("@/assets/slider/3.jpg"),
      image6: require("@/assets/slider/4.jpg"),
      image7: require("@/assets/slider/5.jpg"),
      image8: require("@/assets/slider/6.jpg"),
      image9: require("@/assets/slider/7.jpg"),
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
#el {
  padding: 20px;
}
img {
  width: 200px;
  margin-bottom: 80px;
}
.logo-col {
  margin: auto;
  text-align: left;
  padding-left: 10%;
}
.logo-window {
  padding-top: 80px;
  padding-bottom: 80px;
}
#carousel-1 {
  max-width: 600px;
  min-width: 500px;
  max-height: 600px;
  min-height: 500px;
  margin: auto;
  box-shadow: 0 1em 1em gray;
}
h1 {
  color: #0b4191;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.01rem;
}
@media (max-width: 600px) {
  #carousel-1 {
    min-width: 400px;
  }
}
@media (max-width: 450px) {
  #carousel-1 {
    min-width: 300px;
  }
  img {
    width: 300px;
  }
}
</style>