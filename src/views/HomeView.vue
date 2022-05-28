<template>
  <div>
    <b-carousel
      id="carousel-1"
      style="text-shadow: 0px 0px 2px #000"
      controls
      label-next
      label-prev
      interval
      no-animation
      indicators="true"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First Slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  // data: function () {
  //   return {
  //     slide: 0,
  //     sliding: null,
  //   };
  // },
  // methods: {
  //   onSlideStart() {
  //     this.sliding = true;
  //   },
  //   onSlideEnd() {
  //     this.sliding = false;
  //   },
  // },
};
</script>

<style scoped>
.row {
  margin-top: 100px;
}
</style>