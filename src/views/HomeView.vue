<template>
  <div id="el">
    <b-container>
      <b-row>
        <b-col class="logo-col">
          <div class="logo-window">
            <div>
              <img :src="image5" />
            </div>
            <div>
              <img :src="image4" />
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
              <b-carousel-slide
                style="
                  background-image: url('https://picsum.photos/1024/480/?image=54');
                "
                :img-src="image1"
              ></b-carousel-slide>
              <b-carousel-slide :img-src="image2"></b-carousel-slide>
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
      image1: require("@/assets/slider/image1.jpg"),
      image2: require("@/assets/slider/image2.jpg"),
      image3: require("@/assets/slider/image3.jpg"),
      image4: require("@/assets/home/aluron.svg"),
      image5: require("@/assets/home/schueco.png"),
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
  padding-left: 8%;
}
.logo-window {
  padding-top: 80px;
  padding-bottom: 80px;
}
#carousel-1 {
  max-width: 600px;
  min-width: 500px;
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