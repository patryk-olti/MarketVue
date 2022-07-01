import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;