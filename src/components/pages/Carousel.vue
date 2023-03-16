<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <span class="material-icons" @click="prevSlide">
          arrow_forward_ios
        </span>
      </div>
      <div class="toggle-page right">
        <span class="material-icons" @click="nextSlide">
          arrow_forward_ios
        </span>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const currentSlide = ref(0);
    const getSlideCount = ref(null);
    const autoPlayEnable = ref(true);
    const timeoutDuration = ref(5000);

    //next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value - 1) {
        currentSlide.value = 0;
        return;
      }
      currentSlide.value += 1;
    };

    //prev slide
    const prevSlide = () => {
      if (currentSlide.value === 0) {
        currentSlide.value = getSlideCount.value - 1;
        return;
      }
      currentSlide.value -= 1;
    };

    //auto play
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnable.value) {
      autoPlay();
    }

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });
    return {
      currentSlide,
      getSlideCount,
      nextSlide,
      prevSlide,
      goToSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigate {
  padding: 0 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-page {
    display: flex;
    flex: 1;
  }

  .left {
    justify-content: flex-end;
    transform: rotate(180deg);
  }
  .right {
    justify-content: flex-end;
  }

  .material-icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15%;
    opacity: 0.7;
    width: 40px;
    height: 40px;
    background-color: grey;
    color: #fff;
  }
}

.pagination {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .active {
    background-color: #6347c7;
  }
}
</style>
