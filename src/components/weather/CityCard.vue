<template>
  <div
    class="flex py-6 px-7 h-20 bg-weather-secondary rounded-md shadow-sm cursor-pointer font-NotoJP"
  >
    <div class="flex flex-col flex-1 self-center">
      <h2 class="text-xl">{{ city.city }}</h2>
    </div>
    <div class="flex flex-col flex-1 gap-2 self-center">
      <span class="text-xl"> {{ Math.round(city.weather.temperature) }}℃ </span>
    </div>

    <div class="flex flex-col flex-1 gap-2 self-center">
      <span class="text-xl">
        <img
          class="w-[50px] h-[50px] object-cover"
          :src="`/weather/${city.weather.icon}.png`"
          alt=""
        />
      </span>
    </div>

    <div class="flex flex-col gap-2 self-center">
      <span class="text-xl self-end">
        {{ jpLang(city.weather.summary) }}
      </span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  city: {
    type: Object,
    default: {},
  },
});

const jpLang = (weather) => {
  if (weather === "Cloudy") return "曇り";
  if (weather === "Rain") return "雨があえる";
  if (weather === "Partly Cloudy") return "晴れときどき曇り";
  if (weather === "Clear") return "晴れ";
  if (weather === "Snow") return "雪があえる";
  if (weather === "Wind") return "風があえる";
  if (weather === "Fog") return "霧があえる";
  if (weather === "Sleet") return "霙があえる";
  return "error";
};
</script>
<style lang=""></style>
