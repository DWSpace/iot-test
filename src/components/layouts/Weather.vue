<template>
  <div class="flex flex-col w-full min-h-screen bg-weather-primary">
    <header class="sticky top-0 bg-weather-primary shadow-lg">
      <nav class="container flex flex-row items-center gap-4 text-white py-6">
        <RouterLink :to="{ name: 'index' }">
          <div class="flex items-center gap-3">
            <span class="material-icons text-2xl"> sunny_snowing </span>
            <p class="text-2xl font-NotoJP">地元の天気</p>
          </div>
        </RouterLink>

        <div class="flex gap-3 flex-1 justify-end">
          <span
            class="material-icons text-xl hover:text-weather-secondary duration-150 cursor-pointer"
            @click="toggleModal"
          >
            info
          </span>
          <span
            class="material-icons text-xl hover:text-weather-secondary duration-150 cursor-pointer"
            @click="addCity"
            v-if="route.query.preview"
          >
            add
          </span>
        </div>
        <WeatherInfo :modal-active="modalActive" @close-modal="toggleModal">
          <div class="text-black font-NotoJP">
            <h1 class="text-2xl mb-1">約：</h1>
            <p class="mb4">
              ローカル天気では、選択した都市の現在および将来の天気を追跡できます。
            </p>
            <h2 class="text-2xl">使い方：</h2>
            <ol class="list-decimal list-inside mb-4">
              <li>検索バーに名前を入力して都市を検索します。</li>
              <li>
                結果内の都市を選択すると、選択した現在の天気が表示されます。
              </li>
              <li>
                右上の "+" アイコンをクリックして都市を追跡します。
                これにより、都市が保存され、後でホームページで表示できます。
              </li>
            </ol>
            <h2 class="text-2xl">都市の削除:</h2>
            <p>
              都市を追跡する必要がなくなった場合は、ホームページ内で都市を選択するだけです。
              ページの下部に、都市を削除するオプションがあります。
            </p>
          </div>
        </WeatherInfo>
      </nav>
    </header>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import WeatherInfo from "../weather/WeatherInfo.vue";
const modalActive = ref(null);

const route = useRoute();
const router = useRouter();

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.city ? `${to.params.city} 天気予報 | Woodlink` : to.meta.title
  }`;
  next();
});

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const savedCities = ref([]);
const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const locationObj = {
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lon: route.query.lon,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem("savedCities", JSON.stringify(savedCities.value));

  // Chỗ query này bắt buộc phải làm đúng như thế này thì nó mới thay thế
  // query trên chỗ url được
  let query = Object.assign({}, route.query);

  delete query.preview;

  router.replace({ query });
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 200ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
