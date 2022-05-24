import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueTheMask from "vue-the-mask";
import "./index.css";

createApp(App).use(router).use(createPinia()).use(VueTheMask).mount("#app");
