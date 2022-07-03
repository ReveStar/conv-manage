import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import { createApp, toRaw } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
};

const piniaPlugin = (context) => {
  const { store } = context;
  store.$subscribe(() => {
    setStorage(`pinia-${store.$id}`, toRaw(store.$state));
  });

  const data = getStorage(`pinia-${store.$id}`);
  return {
    ...data,
  };
};
const store = createPinia();
store.use(piniaPlugin);

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
