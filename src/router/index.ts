import Home from "@/pages/Home.vue";
import Tutorial from "@/pages/Tutorial.vue";
import Exercises from "@/pages/Exercises.vue";
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
