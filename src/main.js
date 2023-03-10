import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from "dayjs";
import axios from 'axios';

axios.defaults.baseURL = 'https://lnien0sjnj.execute-api.ap-northeast-1.amazonaws.com/v1/';

// Tailwind
import './assets/styles/tailwind.css'

const app = createApp(App)

app.use(router)


app.mount('#app')


