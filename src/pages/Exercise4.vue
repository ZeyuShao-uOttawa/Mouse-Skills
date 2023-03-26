<template>
  <div class="container">
    <div class="box" :style="{ top: boxTop + 'px', left: boxLeft + 'px' }" ref="box" @mouseenter="respawnBox">
      <p v-if="showMessage" class="message">Good job, you have succeeded!</p>
    </div>
    <div class="item" v-for="(item, index) in items" :key="index" :style="{ top: item.top + 'px', left: item.left + 'px' }" ref="item" @mousedown="startDrag(index)" @mouseup="stopDrag(index)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragging: false,
      mouseX: 0,
      mouseY: 0,
      boxTop: 100,
      boxLeft: 400,
      showMessage: false,
      items: [
        { top: 200, left: 200 },
        { top: 300, left: 300 },
        { top: 400, left: 400 }
      ]
    };
  },
  methods: {
    startDrag(index) {
      this.dragging = index;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    stopDrag(index) {
      this.dragging = false;
      const item = this.items[index];
      if (item.left > this.boxLeft && item.left < this.boxLeft + 100 && item.top > this.boxTop && item.top < this.boxTop + 100) {
        this.items.splice(index, 1);
        this.showMessage = true;
      }
    },
    handleDrag(event) {
      if (this.dragging !== false) {
        const item = this.items[this.dragging];
        item.left += event.clientX - this.mouseX;
        item.top += event.clientY - this.mouseY;
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
    window.addEventListener("mousemove", this.handleDrag);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleDrag);
  }
};
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
