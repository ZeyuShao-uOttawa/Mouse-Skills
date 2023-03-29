<script setup lang="ts">
import { RouterLink } from "vue-router";
import Drag from "@/assets/Drag.png";
import Leftclick from "@/assets/leftclick.png";
import Outlook from "@/assets/outlook.png";
</script>

<template>

    <div class="container" style="text-align: center; margin: auto; height: 92vh;">
        <div class="text-center"><h2>Exercises</h2></div>
        <div class="container" style="height: 70vh; margin: auto; padding-top:10vh">
            <div class="card-group text-center center" style="margin: auto;">
                <div class="col-lg-3" id="project-card-div">
                <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise1">
                    <div class="card" id="project-card">
                    <img :src=Leftclick class="card-img-top" alt="NOT LOADING" id="project-img">
                    <div class="card-body">
                        <h3 class="card-title">Left Click Exercise</h3>
                    </div>
                    </div>
                </RouterLink></a>
                </div>
                <div class="col-lg-1">

                </div>
                <div class="col-lg-3" id="project-card-div">
                <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise2">
                    <div class="card" id="project-card">
                    <img :src=Drag class="card-img-top" alt="NOT LOADING" id="project-img">
                    <div class="card-body">
                        <h3 class="card-title">Drag Exercise</h3>
                    </div>
                    </div>
                </RouterLink></a>
                </div>
                <div class="col-lg-1">

                </div>
                <div class="col-lg-3" id="project-card-div">
                <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise3">
                    <div class="card" id="project-card">
                    <img :src=Outlook class="card-img-top" alt="NOT LOADING" id="project-img">
                    <div class="card-body">
                        <h3 class="card-title">Email Exercise</h3>
                    </div>
                    </div>
                </RouterLink></a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.center {
  align-items: center; 
  justify-content: center; 
  display: flex;
}
</style>
