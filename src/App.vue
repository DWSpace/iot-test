<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/commons/Sidebar.vue";
</script>

<template>
  <div class="app bg-indigo-100">
    <div id="left">
      <Sidebar />
    </div>
    <div id="right">
      <RouterView />
    </div>

    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --bg-child: #32364a;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

.app {
  display: flex;
  height: 100vh;
}

#left {
  flex-grow: 0;
}

#right {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
