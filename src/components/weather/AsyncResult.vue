<template>
  <div class="flex flex-col flex-1 items-center font-NotoJP">
    <!-- Banner -->
    <div
      v-if="route.query.preview"
      class="text-white p-4 bg-weather-secondary w-full text-center"
    >
      <p>
        現在、この都市をプレビューしています。"+"
        アイコンをクリックして、この都市の追跡を開始してください。
      </p>
    </div>
    <!-- weather overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      <p class="text-sm mb-12">{{ datetime() }}</p>
      <p class="text-8xl mb-8">
        {{ Math.round(weatherData.currently.temperature) }}℃
      </p>
      <img
        class="w-[150px] h-auto"
        :src="`/weather/${weatherData.currently.icon}.png`"
        alt=""
      />
      <p class="text-xl">{{ jpLang(weatherData.currently.summary) }}</p>
    </div>

    <hr class="border-white border border-opacity-20 w-full" />

    <!-- Hourly weather -->
    <div class="max-w-5xl w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4">毎時の天気</h2>
        <div class="flex gap-10 basis-11 overflow-x-scroll">
          <div
            v-for="hour in weatherData.hourly.data"
            class="flex flex-col items-center"
          >
            <p class="whitespace-nowrap w-11 text-center text-base">
              {{
                new Date(hour.time * 1000).toLocaleTimeString([], {
                  hour: "numeric",
                })
              }}
            </p>
            <img
              class="w-[45px] h-[45px]"
              :src="`/weather/${hour.icon}.png`"
              alt=""
            />
            <p class="text-right">
              {{ Math.round(hour.precipProbability * 100) }}%
            </p>
            <p class="text-base">{{ Math.round(hour.temperature) }}℃</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-white border border-opacity-20 w-full" />

    <!-- Weekly weather -->
    <div class="max-w-5xl w-full py-12 text-white">
      <div class="mx-8">
        <h2 class="mb-4">7日間予報</h2>
        <div
          v-for="dayName in weatherData.daily.data"
          class="flex items-center border-b-[1px] border-indigo-500/50"
        >
          <p class="flex-1">
            {{
              new Date(dayName.time * 1000).toLocaleString("ja-JP", {
                weekday: "long",
              })
            }}
          </p>
          <img
            class="w-[45px] h-[45px]"
            :src="`/weather/${dayName.icon}.png`"
            alt=""
          />
          <div class="flex-[2_1_0%]">
            <p class="text-center">
              高: {{ Math.round(dayName.temperatureMax) }}℃
            </p>
            <p class="text-center">
              低: {{ Math.round(dayName.temperatureMin) }}℃
            </p>
          </div>
          <div class="flex-1">
            <p class="text-center">雨の可能性:</p>
          </div>
          <div class="flex-1">
            <p class="text-right">
              {{ Math.round(dayName.precipProbability * 100) }}%
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center gap-2 py-12 text-white cursor-pointer duration-150 hover:text-red-500"
      @click="removeCity"
    >
      <span class="material-icons text-2xl"> delete_forever </span>
      <p class="text-2xl font-NotoJP">解消する</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await fetch(
      `https://api.pirateweather.net/forecast/qpkwypu4WKLYa3Ycy9cNBzuUEStELW4Bp2d8Uki0/${route.query.lat},${route.query.lon}?&units=ca&exclude=minutely`
    );
    return weatherData.json();
  } catch (error) {}
};
const weatherData = await getWeatherData();

const datetime = () => {
  const d = new Date();
  const lang = "ja-JP",
    year = d.toLocaleString(lang, { year: "numeric" }),
    month = d.toLocaleString(lang, { month: "short" }),
    day = d.toLocaleString(lang, { day: "numeric" }),
    dayName = d.toLocaleString(lang, { weekday: "short" }),
    hour = d.toLocaleTimeString();
  return `${dayName}, ${year} ${month} ${day}, ${hour}`;
};

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

const router = useRouter();
const removeCity = () => {
  const cities = JSON.parse(localStorage.getItem("savedCities"));
  const updatedCities = cities.filter((city) => city.city != route.params.city);
  localStorage.setItem("savedCities", JSON.stringify(updatedCities));
  router.push("/weather");
};
</script>

<style></style>
