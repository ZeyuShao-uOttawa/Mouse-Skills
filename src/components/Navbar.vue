<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "@/assets/logo.png";
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="padding: 0vh 2vw; padding-top: 2vh; height: 8vh;">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/home" style="font-size: 30px;"><img :src=Logo alt="Logo" style="width: 50px; height: 50px;">Mouse Skills</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" style="font-size: 20px;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/home">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/exercises">Exercise</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>
