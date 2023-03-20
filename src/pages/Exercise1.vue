<template>
  <div class="container-fluid" style="text-align: center; margin: auto; height: 92vh;">
    <h1>Click the button as fast as you can!</h1>
    <div class="game-area">
      <button v-if="showButton" id="game-button" @click="handleClick" :style="{ top: position_x + 'px', left: position_y + 'px' }"></button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
        score: 0,
        gameCompleted: false,
        maxPresses: 5,
      };
    },
    methods: {
      handleClick() {
        if (this.showButton) {
          this.score++;
          if (this.score >= this.maxPresses) {
            this.gameCompleted = true;
          }
          this.showButton = false;
          setTimeout(() => {
            this.showButton = true;
          }, Math.random() * 2000 + 1000);
        }
      },
    },
    mounted() {
      this.showButton = true;
    },
  };
  </script>
  
  <style scoped>
  .game-area {
    width: 400px;
    height: 400px;
    border: 2px solid black;
    position: relative;
  }
  .game-button {
    position: absolute;
    left { Math.random() * 350 }px;
    top { Math.random () * 350 }px;
    width: 50px;
    height: 50px;
    background-color: red;
    border: none;
    border-radius: 50%;
  }
  </style>
  