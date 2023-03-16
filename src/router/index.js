import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/layouts/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/graph",
      name: "graph",
      component: () => import("../components/layouts/Graph.vue"),
      meta: {
        title: "đồ thị iot",
      },
    },
    {
      path: "/general",
      name: "general",
      component: () => import("../components/layouts/General.vue"),
      meta: {
        title: "trang general",
      },
    },
    {
      path: "/diary",
      name: "diary",
      component: () => import("../components/layouts/DayDiary.vue"),
      meta: {
        title: "lam trang nhat ky",
      },
    },
    {
      path: "/weather",
      name: "weather",
      component: () => import("../components/layouts/Weather.vue"),
      meta: {
        title: "天気予報 | Woodlink",
      },
      children: [
        {
          path: "",
          name: "index",
          component: () =>
            import("../components/weather/WeatherCitySearch.vue"),
        },
        {
          path: ":city",
          name: "cityview",

          component: () => import("../components/weather/CityView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
