import { createRouter,createWebHistory } from 'vue-router'
import Home from '../components/layouts/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../components/layouts/Graph.vue')
    },
    {
      path: '/general',
      name: 'general',
      component: () => import('../components/layouts/General.vue')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('../components/layouts/DayDiary.vue'),
      meta: {
        title:'修理実施情報事入力フォーム'
      }
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../components/layouts/Weather.vue'),
      meta: {
        title: 'Weather | Woodlink'
      },
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../components/weather/WeatherCitySearch.vue')
        },
        {
          path: ':city',
          name: 'cityview',

          component: () => import('../components/weather/CityView.vue')
        },

      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})

export default router
