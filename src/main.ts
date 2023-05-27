import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import plugins from './plugins';
const { vuetify, webfontloader } = plugins;

import App from './App.vue';
import router from './router';

const app = createApp(App);
webfontloader();
const pinia = createPinia();

app.use(pinia)
   .use(router)
   .use(vuetify)

   .mount('#app');
