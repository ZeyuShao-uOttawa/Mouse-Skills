<script setup lang="ts">
import { ref } from 'vue';
import emailInital from '@/assets/email.png';
import emailCompose from '@/assets/emailpart2.png';

var email = emailInital;
var compose = ref(false);
var emailSent = ref(false);

function newEmail(){
  email = emailCompose;
  compose.value = true;
}

function sendEmail(){
  email = emailInital;
  compose.value = false;
  alert("You have successfully send a email, press new mail to send another one");
}

</script>

<template>

  <div class="email">
    <div class="container" style="text-align: center; margin: auto; height: 92vh;">
      <h1>Mouse Skills Email Simulator</h1>
      <div class="email">
        <img :src="email" alt="My Image" style="width:1280px; height:720px;">
        <button v-if="!compose" class="btn newEmail" @click="newEmail">+ New Email</button>
        <button v-if="compose" class="btn sendEmail" @click="sendEmail">Send Email</button>
        <textarea v-if="compose" class="to" placeholder="This is you are sending the email to, type an email here"></textarea>
        <textarea v-if="compose" class="subject" placeholder="Subject (This is the subject, type the subject of the email)"></textarea>
        <textarea v-if="compose" class="body" placeholder="This is the body of the email, type any text you wish to send"></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: solid;
  border-color: yellow;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.newEmail {
  transform: translate(-600px, -300px);
  -ms-transform: translate(-600px, -300px);
}

.sendEmail {
  transform: translate(470px, -350px);
  -ms-transform: translate(500px, -350px);
}

.to {
  position: absolute;
  top: 50%;
  left: 50%;
  resize: none;
  width: 500px;
  height: 20px;
  transform: translate(-50px, -209px);
  font-size: 12px;
}

.subject {
  position: absolute;
  top: 50%;
  left: 50%;
  resize: none;
  width: 500px;
  height: 20px;
  transform: translate(-70px, -175px);
  font-size: 12px;
}

.body {
  position: absolute;
  top: 50%;
  left: 50%;
  resize: none;
  width: 600px;
  height: 300px;
  transform: translate(-70px, -140px);
  font-size: 12px;
}

button:hover {
  background-color: black;
  color: white;
}
</style>
