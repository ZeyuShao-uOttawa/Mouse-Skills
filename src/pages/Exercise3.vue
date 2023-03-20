<script setup lang="ts">
import { ref } from 'vue';
import emailInital from '@/assets/email.png';
// var emailInital = ref('@/assets/email.png');

</script>

<template>

    <div class="container" style="text-align: center; margin: auto; height: 92vh;">
      <h1>Mouse Skills Email Simulator</h1>
      <div class="email">
        <img :src="emailInital" alt="My Image" style="width:1280px; height:720px;" usemap="#my-map">
        <map name="my-map">
          <area shape="rect" coords="100,100,200,200" onclick="">
        </map>
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

/* .email-background{
  background-image: url(../assets/email.png);
} */

area {
  background-color: red;
  opacity: 0.5;
  cursor: pointer;
}
</style>
