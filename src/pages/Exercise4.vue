<template>
    <div class="container">
      <div class="box" :style="{ top: boxTop + 'px', left: boxLeft + 'px' }" ref="box" @mouseenter="respawnBox">
        <p v-if="showMessage" class="message">Good job, you have succeeded!</p>
      </div>
      <div class="item" :style="{ top: itemTop + 'px', left: itemLeft + 'px' }" ref="item" @mousedown="startDrag" @mouseup="stopDrag"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dragging: false,
        mouseX: 0,
        mouseY: 0,
        itemTop: 200,
        itemLeft: 200,
        boxTop: 100,
        boxLeft: 400,
        showMessage: false
      }
    },
    methods: {
      startDrag(event) {
        this.dragging = true;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      },
      stopDrag() {
        this.dragging = false;
        if (this.itemLeft > this.boxLeft && this.itemLeft < this.boxLeft + 100 && this.itemTop > this.boxTop && this.itemTop < this.boxTop + 100) {
          this.showMessage = true;
        }
      },
      handleDrag(event) {
        if (this.dragging) {
          this.itemLeft += event.clientX - this.mouseX;
          this.itemTop += event.clientY - this.mouseY;
          this.mouseX = event.clientX;
          this.mouseY = event.clientY;
        }
      },
      respawnBox() {
        this.boxTop = Math.random() * (window.innerHeight - 100);
        this.boxLeft = Math.random() * (window.innerWidth - 100);
        this.showMessage = false;
      }
    },
    mounted() {
      window.addEventListener('mousemove', this.handleDrag);
    },
    beforeUnmount() {
      window.removeEventListener('mousemove', this.handleDrag);
    }
  }
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: top 0.5s, left 0.5s;
  }
  
  .message {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  .item {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 10px;
    cursor: grab;
  }
  </style>
  