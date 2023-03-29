<script setup lang="ts">
import { ref } from 'vue';
var position_x = Math.random() * (1000-50);
var position_y = Math.random() * (600-50);
const showButton = ref(false);
const score = ref(0);
const gameOver = ref(false);
const freePlay= ref(false);
const startTime = ref(0);
const totalTime = ref(30);
const elapsedTime = ref(0);
const remainingTime = ref(totalTime.value);

function handleClick() {
  position_x = Math.random() * (1000-50);
  position_y = Math.random() * (600-50);
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
// setTimeout(() => {
  
//   showButton.value = true;
//   setTimeout(() => {
//     showButton.value = false;
//     gameOver.value = true;
//   }, 30000); // game ends after 30 seconds
// });
startGame();


function startGame(){
  score.value = 0;
  gameOver.value = false;
  showButton.value = true;
  startTime.value = Date.now();

  // setTimeout(() => {
  // showButton.value = true;
  setInterval(() => {
    const currentTime = Date.now();
    elapsedTime.value = Math.round((currentTime - startTime.value) / 1000);
    remainingTime.value = Math.max(totalTime.value - elapsedTime.value, 0);
  }, 1000); // update remaining time every second

  setTimeout(() => {
    showButton.value = false;
    gameOver.value = true;
  }, totalTime.value * 1000); // game ends after 30 seconds
  // });
}

function freeplay(){
  freePlay.value = true;
  showButton.value = true;
}
</script>

<template>
  <div class="container-fluid" style="text-align: center; margin: auto; height: 92vh;">
    <h1>Click the button as much as you can!</h1>
    <div class="game-area" style="margin:auto;">
      <button v-if="(showButton && !gameOver) || (showButton && freePlay)" id="game-button" @click="handleClick" :style="{ top: position_y + 'px', left: position_x + 'px' }"></button>
      <button class="restart" v-if="gameOver && !freePlay" @click="startGame">Restart Game</button>
      <button class="freeplay" v-if="gameOver && !freePlay" @click="freeplay">Freeplay</button>
    </div>
    <p v-if="gameOver || freePlay">Game over! Your score is {{ score }}.</p>
    <p v-if="!gameOver">Time Remaining: {{remainingTime}}</p>
  </div>
</template>

<style scoped>
.game-area {
  width: 1000px;
  height: 600px;
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

.restart {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: green;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transform: translate(-140px, 0px);
  -ms-transform: translate(-600px, -300px);
}

.freeplay {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transform: translate(10px, 0px);
  -ms-transform: translate(-600px, -300px);
}
</style>