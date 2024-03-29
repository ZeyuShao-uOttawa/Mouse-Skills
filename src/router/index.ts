import Home from "@/pages/Home.vue";
import Tutorial from "@/pages/Tutorial.vue";
import Exercises from "@/pages/Exercises.vue";
import Exercise1 from "@/pages/Exercise1.vue";
import Exercise2 from "@/pages/Exercise2.vue";
import Exercise3 from "@/pages/Exercise3.vue";
import Exercise4 from "@/pages/Exercise4.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: {name: 'tutorial'}
    // },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "tutorial",
      component: Tutorial,
    },
    {
      path: "/exercises",
      name: "exercises",
      component: Exercises,
    },
    {
      path: "/exercise1",
      name: "exercise1",
      component: Exercise1,
    },
    {
      path: "/exercise2",
      name: "exercise2",
      component: Exercise2,
    },
    {
      path: "/exercise3",
      name: "exercise3",
      component: Exercise3,
    },
    {
      path: "/exercise4",
      name: "exercise4",
      component: Exercise4,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;