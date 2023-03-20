<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
@@ -8,43 +7,43 @@ import { RouterLink } from "vue-router";
        <div class="text-center"><h2>Exercises</h2></div>
        <div class="card-group text-center center" style="margin: auto;">
            <div class="col-lg-3" id="project-card-div">
            <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise1">
                <div class="card" id="project-card">
                <img src="Assets/study1.png" class="card-img-top" alt="NOT LOADING" id="project-img">
                <div class="card-body">
                    <h3 class="card-title">Special title treatment</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </RouterLink></a>
            </div>
            <div class="col-lg-1">

            </div>
            <div class="col-lg-3" id="project-card-div">
            <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise2">
                <div class="card" id="project-card">
                <img src="Assets/study1.png" class="card-img-top" alt="NOT LOADING" id="project-img">
                <div class="card-body">
                    <h3 class="card-title">Special title treatment</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </RouterLink></a>
            </div>
            <div class="col-lg-1">

            </div>
            <div class="col-lg-3" id="project-card-div">
            <a class="card-link" href="#"><RouterLink class="navbar-brand" to="/exercise3">
                <div class="card" id="project-card">
                <img src="Assets/study1.png" class="card-img-top" alt="NOT LOADING" id="project-img">
                <div class="card-body">
                    <h3 class="card-title">Special title treatment</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </RouterLink></a>
            </div>
        </div>
    </div>