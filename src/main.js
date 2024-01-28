import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import "./main.css";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
