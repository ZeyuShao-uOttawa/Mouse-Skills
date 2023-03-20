<script>
export default {
  data() {
    return {
      email: {
        to: '',
        subject: '',
        message: '',
      },
      showEmailComposer: false,
      isDragging: false,
      isCopying: false,
    };
  },
  methods: {
    composeEmail() {
      this.showEmailComposer = true;
    },
    sendEmail() {
      alert('Email sent!');
      this.showEmailComposer = false;
      this.email = {
        to: '',
        subject: '',
        message: '',
      };
    },
    handleMouseDown() {
      if (!this.isDragging && !this.isCopying) {
        this.isDragging = true;
      } else if (this.showEmailComposer && !this.isCopying) {
        this.isCopying = true;
      }
    },
    handleMouseUp() {
      if (this.isDragging) {
        this.isDragging = false;
      } else if (this.isCopying) {
        this.isCopying = false;
        alert('Text copied!');
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Mouse Skills Email Simulator</h1>
    <div class="simulator">
      <div class="left-panel">
        <div class="folder" @mousedown=handleMouseDown @mouseup=handleMouseUp></div>
      </div>
      <div class="middle-panel">
        <button @click="composeEmail">Compose Email</button>
        <div v-if="showEmailComposer">
          <input type="text" placeholder="To" v-model="email.to" />
          <input type="text" placeholder="Subject" v-model="email.subject" />
          <textarea placeholder="Write your message here" v-model="email.message"></textarea>
          <button @click="sendEmail">Send</button>
        </div>
      </div>
      <div class="right-panel">
        <div class="clipboard" @mousedown=handleMouseDown @mouseup=handleMouseUp></div>
      </div>
    </div>
    <div class="instructions">
      <h2>Instructions:</h2>
      <ul>
        <li>Click and hold the folder to drag it to a new location</li>
        <li>Click the "Compose Email" button to start composing an email</li>
        <li>Fill in the email details and click "Send" to send the email</li>
        <li>Click and hold the clipboard to copy and paste email text</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.simulator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
}
.left-panel {
  flex: 1;
  display: flex;
  justify-content: center;
}
.folder {
  width: 100px;
  height: 100px;
  background-color: gray;
  cursor: move;
}
.middle-panel {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-panel {
  flex: 1;
  display: flex;
  justify-content: center;
}
.clipboard {
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid black;
  cursor: copy;
}
.instructions {
  margin-top: 50px;
}
</style>
