<script setup lang="ts">
import { ref } from 'vue';
var position_x = Math.random() * 350;
var position_y = Math.random() * 350;
const showButton = ref(false);
const score = ref(0);
const gameOver = ref(false);
function handleClick() {
  position_x = Math.random() * 350;
  position_y = Math.random() * 350;
  if (showButton.value) {
    score.value++;
    showButton.value = false;
    setTimeout(() => {
      showButton.value = true;
    }, Math.random() * 1000 + 100);
  } else {
    gameOver.value = true;
  }
}
setTimeout(() => {
  showButton.value = true;
  setTimeout(() => {
    showButton.value = false;
    gameOver.value = true;
  }, 30000); // game ends after 30 seconds
});
</script>

<template>
  <div class="container-fluid" style="text-align: center; margin: auto; height: 92vh;">
    <h1>Click the button as fast as you can!</h1>
    <div class="game-area">
      <button v-if="showButton" id="game-button" @click="handleClick" :style="{ top: position_x + 'px', left: position_y + 'px' }"></button>
    </div>
    <p v-if="gameOver">Game over! Your score is {{ score }}.</p>
  </div>
</template>

<style scoped>
.game-area {
  width: 600px;
  height: 400px;
  border: 2px solid black;
  position: relative;
}
#game-button {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
  border: none;
  border-radius: 50%;
}
</style>