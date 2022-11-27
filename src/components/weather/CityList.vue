<template class="font-NotoJP text-white">
    <div v-for="city in savedCities">
        <CityCard :city='city' @click="goToCityView(city)" />
    </div>
    <p v-if="savedCities.length == 0">
        場所が追加されていません。</p>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CityCard from './CityCard.vue';

const savedCities = ref([]);
const getCities = async () => {
    if (localStorage.getItem('savedCities')) {
        savedCities.value = JSON.parse(localStorage.getItem('savedCities'));


        //Đoạn này là async
        let res = [];
        savedCities.value.forEach((city) => {

            res.push(`https://api.pirateweather.net/forecast/qpkwypu4WKLYa3Ycy9cNBzuUEStELW4Bp2d8Uki0/${city.coords.lat},${city.coords.lon}?&units=ca&exclude=minutely,hourly,daily`)
        }
        );

        const requests = await Promise.all(res.map((url) => fetch(url)));
        const responses = await Promise.all(requests.map(r => r.json()))
        // const promises = responses.map((response) => response.json());

        responses.forEach((value, index) => {
            savedCities.value[index].weather = value.currently;
        })

        // Đoạn này nó ko async, chờ đợi load hết một lần


        // savedCities.value.forEach(async (city) => {

        //     const res = await fetch(`https://api.pirateweather.net/forecast/qpkwypu4WKLYa3Ycy9cNBzuUEStELW4Bp2d8Uki0/${city.coords.lat},${city.coords.lon}?&units=ca&exclude=minutely,hourly,daily`);
        //     requests.push(await res.json());

        // });
        // console.log('requests')
        // console.log(requests)

    }
}

await getCities()

const router = useRouter();
const goToCityView = (city) => {
    router.push({
        name: 'cityview',
        params: { city: city.city },
        query: { lat: city.coords.lat, lon: city.coords.lon }
    })
}
</script>