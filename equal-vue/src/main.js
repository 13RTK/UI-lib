import "./assets/main.css";

import { createApp } from "vue";
import Equal from "equal-vue";
import Config from "equal-vue/dist/theme/full";
import App from "./App.vue";

const app = createApp(App);
app.use(Equal, Config);

app.mount("#app");
