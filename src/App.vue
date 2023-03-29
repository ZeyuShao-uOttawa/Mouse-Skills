<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
</script>

<template>
  <Navbar />
  <RouterView /> 
</template>

<style scoped>

</style>
