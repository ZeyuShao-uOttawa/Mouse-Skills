<template>
    <div>
      <h1>Click the button 5 times!</h1>
      <div class="game-area" @click="handleClick">
        <button v-if="showButton" class="game-button"></button>
      </div>
      <p v-if="gameCompleted">Game completed!</p>
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
  