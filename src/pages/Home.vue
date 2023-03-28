<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>

    <div class="container" style="text-align: center; margin: auto; height: 92vh;">
        <div class="row" style="height: 55vh; margin: auto; padding-top: 25vh; max-width:60%;">
          <div class="col-6 menu" style="background-color: aquamarine;">
            <RouterLink class="navbar-brand menu" to="/exercises" style="width: 100%; height: 100%;">Exercises</RouterLink>
          </div>
          <div class="col-6">
            <div class="row" style="height: 100%;">
              <div class="col-12 menu" style="background-color: aqua;">Log In</div>
              <div class="col-12 menu" style="background-color: skyblue;">Sign Up</div>
            </div>
          </div>
        </div>
    </div>

</template>

<style scoped>
.menu {
  align-items: center; 
  justify-content: center; 
  display: flex;
  font-size: xx-large;
}


</style>
