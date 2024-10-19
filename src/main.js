import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";

import { initializeFirebase } from "./firebase";
initializeFirebase();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
