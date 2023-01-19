<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="都市または州を検索する。" class="
          py-2
          px-1
          w-full
          bg-transparent
          border-b
          focus:border-weather-primary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]" />
      <ul class="
          absolute
          bg-weather-secondary
          text-white
          w-full
          shadow-md
          py-2
          px-1
          top-[66px]
        " v-if="searchResults">
        <p v-if="searchError">
          申し訳ありませんが、エラーが発生しました。もう一度お試しください。
        </p>
        <p v-if="!searchError && searchResults.length === 0">
          場所に一致する結果はありません。別の場所を試してください。
        </p>
        <template v-else>
          <router-link :to="{
            name: 'cityview',
            params: { city: searchResult.display_name.split(',')[0].replaceAll(' ', '') },
            query: { lat: searchResult.lat, lon: searchResult.lon, preview: true },
          }" v-for="searchResult in searchResults" :key="searchResult.place_id">
            <li class="py-2 cursor-pointer">{{ searchResult.display_name }}</li>
          </router-link>
        </template>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton v-for="n in listCity()" />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import CityCardSkeleton from "./CityCardSkeleton.vue";
import CityList from "./CityList.vue";

const searchQuery = ref("");
const searchResults = ref(null);
const queryTimeout = ref(null);
const searchError = ref(null);

const listCity = () => {
  const getListCity = JSON.parse(localStorage.getItem('savedCities'));
  return getListCity === null ? 0 : getListCity.length
}

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value != "") {
      try {
        const response = await fetch(
          `https://geocode.maps.co/search?city=${searchQuery.value}`
        );
        if (!response.ok) throw new Error("Something went wrong!");
        searchResults.value = await response.json();
      } catch (error) {
        searchError.value = true;
      }

      return;
    }
    searchResults.value = null;
  }, 300);
};
</script>

<style>

</style>