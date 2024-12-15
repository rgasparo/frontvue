import { createApp } from "vue";
import App from "./App.vue";

export const mount = (el) => {
  console.log("Ejecutando el método mount");
  const app = createApp(App);
  app.mount(el);
};

console.log("Exportaciones desde mount.js:", { mount });
