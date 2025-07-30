import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { classDirective } from "./directives";
import router from "./router";
import "./style.css";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .directive("class", classDirective)
  .mount("#app");
