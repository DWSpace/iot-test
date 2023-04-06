<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/commons/Sidebar.vue";
import Toast from "primevue/toast";
</script>

<template>
  <div class="app bg-indigo-100">
    <div id="left">
      <Sidebar />
    </div>
    <div id="right">
      <RouterView />
    </div>
    <Toast />
    <!-- <Footer /> -->
  </div>
</template>