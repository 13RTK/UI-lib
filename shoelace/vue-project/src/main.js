import { createApp } from "vue";
import App from "./App.vue";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import GlobalComponents from "./includes/globals";

const app = createApp(App);
app.use(GlobalComponents);

app.mount("#app");
