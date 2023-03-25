
<template>
    <div>
      <h2>Step {{ currentStep + 1 }}: {{ steps[currentStep].title }}</h2>
      <p>{{ steps[currentStep].description }}</p>
      <div v-if="steps[currentStep].type === 'drag-drop'">
        <div class="drag-drop-container">
          <div class="drag-drop-item" v-bind:class="{ highlight: dragDropHighlighted }" v-on:dragover.prevent v-on:dragenter="dragDropHighlighted = true" v-on:dragleave="dragDropHighlighted = false" v-on:drop="dragDropCompleted = true">Drag and drop me!</div>
        </div>
        <p v-if="!dragDropCompleted" class="hint">Hint: Try dragging the item to the highlighted area.</p>
      </div>
      <button v-else-if="steps[currentStep].type === 'left-click'" v-on:click="leftClickCompleted = true">Click me with the left button!</button>
      <p v-if="steps[currentStep].type === 'left-click' && !leftClickCompleted" class="hint">Hint: Use the left mouse button to click the button.</p>
      <button v-else-if="steps[currentStep].type === 'right-click'" v-on:contextmenu.prevent v-on:mousedown.right="rightClickCompleted = true">Right click me!</button>
      <p v-if="steps[currentStep].type === 'right-click' && !rightClickCompleted" class="hint">Hint: Use the right mouse button to click the button.</p>
      <div v-else-if="steps[currentStep].type === 'scroll'" class="scroll-container" v-on:wheel="scrollCompleted = true">
        <div class="scroll-item" v-bind:style="{ 'background-color': scrollBackgroundColor }"></div>
      </div>
      <p v-if="steps[currentStep].type === 'scroll' && !scrollCompleted" class="hint">Hint: Use the mouse scroll wheel to scroll up and down.</p>
      <button v-if="!completed && (dragDropCompleted  leftClickCompleted  rightClickCompleted || scrollCompleted)" v-on:click="nextStep">Next Step</button>
      <button v-if="completed" v-on:click="finishGame">Finish</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentStep: 0,
        completed: false,
        dragDropHighlighted: false,
        dragDropCompleted: false,
        leftClickCompleted: false,
        rightClickCompleted: false,
        scrollCompleted: false,
        scrollBackgroundColor: 'white',
        steps: [
          {
            type: 'drag-drop',
            title: 'Drag and Drop',
            description: 'Drag the item to the highlighted area.',
          },
          {
            type: 'left-click',
            title: 'Left Click',
            description: 'Click the button with the left mouse button.',
          },
          {
            type: 'right-click',
            title: 'Right Click',
            description: 'Right click the button to see the menu.',
  },
          {
            type: 'scroll',
            title: 'Scroll',
            description: 'Use the mouse scroll wheel to scroll up and down.',
          },
        ],
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
        } else {
          this.completed = true;
        }
        this.reset
