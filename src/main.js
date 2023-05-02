import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import primeVueLocale from './ja.json'

axios.defaults.baseURL =
  "https://lnien0sjnj.execute-api.ap-northeast-1.amazonaws.com/v1";

// import Tailwind and manually code scss
import "./assets/styles/index.scss";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.provide('axios', axios)
app.use(PrimeVue, { locale:  primeVueLocale.ja });
app.use(ToastService);

app.mount("#app");
