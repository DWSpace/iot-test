<template lang="">
  <div>
    <Suspense>
      <async-result></async-result>
      <template #fallback>
        <AsyncCitySkeleton/>
      </template>
    </Suspense>
  </div>
</template>
<script setup>
import AsyncResult from "./AsyncResult.vue";
import AsyncCitySkeleton from "./AsyncCitySkeleton.vue";
</script>
<style lang=""></style>
