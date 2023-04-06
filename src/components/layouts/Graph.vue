<template>
  <div class="w-full">
    <div class="flex pt-8 px-8 items-center justify-end">
      <p class="text-xl mr-8">時間:</p>
      <Calendar v-model="selectedDate" showIcon />
    </div>
    <div class="grid grid-cols-2 gap-5 p-8">
      <Panel header="集塵機 4">
        <LineChart name="dust4" :date="parseDate"></LineChart>
      </Panel>
      <Panel header="集塵機 5">
        <LineChart name="dust5" :date="parseDate"></LineChart>
      </Panel>
      <Panel header="集塵機 7">
        <LineChart name="dust7" :date="parseDate"></LineChart>
      </Panel>
      <Panel header="集塵機 8">
        <LineChart name="dust8" :date="parseDate"></LineChart>
      </Panel>
      <Panel header="集塵機 9">
        <LineChart name="dust9" :date="parseDate"></LineChart>
      </Panel>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import dayjs from 'dayjs';

const selectedDate = ref(new Date())

const parseDate = computed(() => {
  return dayjs(selectedDate.value).format('YYYY-MM-DD');
})

</script>

<style>
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