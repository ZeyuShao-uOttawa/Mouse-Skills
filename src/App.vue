<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Tutorial from "./pages/Tutorial.vue";
</script>

<template>
  <Navbar />
  <RouterView /> 
</template>

<style scoped>

</style>
