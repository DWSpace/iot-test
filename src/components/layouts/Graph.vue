<template>
  <div class="grid w-full grid-cols-2 gap-5 p-8">
    <Panel header="集塵機 4">
      <LineChart></LineChart>
    </Panel>
    <Panel header="集塵機 5">
      <LineChart></LineChart>
    </Panel>
    <Panel header="集塵機 7">
      <LineChart></LineChart>
    </Panel>
    <Panel header="集塵機 8">
      <LineChart></LineChart>
    </Panel>
    <Panel header="集塵機 9">
      <LineChart></LineChart>
    </Panel>
  </div>
</template>

<script>
import LineChart from '../iot-chart/LineChart.vue';

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