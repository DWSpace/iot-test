<template>
  <div class="overflow-x-auto">
    
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const tab = reactive([
  {
    name: 'tab1',
    status: 1
  },
  {
    name: 'tab1',
    status: 1
  },
  {
    name: 'tab1',
    status: 1
  },
  {
    name: 'tab1',
    status: 1
  }
]);

</script>
<style lang="scss" scoped>
table, th, td {
  border: 1px solid;
}
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
