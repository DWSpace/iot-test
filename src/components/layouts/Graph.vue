<template>
  <div class="w-full">
    <div class="flex pt-8 px-8 items-center justify-end">
      <p class="text-xl mr-8">時間:</p>
      <Calendar v-model="selectedDate" showIcon />
    </div>
    <div class="grid grid-cols-2 gap-5 p-8">
      <Panel v-for="(item, index) in listMachine" :key="index" 
        :header="item[0]">
        <LineChart :name="item[1]" :date="parseDate" :maxCurrent="item[2]"></LineChart>
      </Panel>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import dayjs from 'dayjs';

const selectedDate = ref(new Date())
const listMachine = reactive([
  ['集塵機 4','dust4', 51],
  ['集塵機 5', 'dust5', 21],
  ['集塵機 7', 'dust7', 42],
  ['集塵機 8', 'dust8', 21],
  ['集塵機 9', 'dust9', 21]
])

const parseDate = computed(() => {
  return dayjs(selectedDate.value).format('YYYY-MM-DD');
})

</script>

<style lang="scss" scoped>
/* input[type="date"] {
  background-color: #0080ff;
  padding: 15px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
} */
</style>