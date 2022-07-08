import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Market from "@/views/Market.vue";

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
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;