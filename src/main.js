import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";

import firebaseService from "./firebase";

firebaseService.initializeFirebase();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
