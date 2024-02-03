import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import transition from "./transition";
import {MotionPlugin} from '@vueuse/motion'
import "./main.css";
import "aos/dist/aos.css";

const app = createApp(App);



app.use(router).use(MotionPlugin);

app.mount("#app");
