<template>
  <div class="w-full h-full" style="position: relative">
    <Carousel v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in imgPath" :key="index">
        <div v-show="currentSlide === index" class="slide-info">
          <img :src="`./src/assets/img/${slide}`" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../pages/Carousel.vue";
import Slide from "../pages/Slide.vue";
export default {
  components: {
    Carousel,
    Slide,
  },
  setup(props) {
    const imgPath = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
    return { imgPath };
  },
};
</script>

<style lang="scss" scoped>
.slide-info {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  object-fit: cover;
}
</style>
