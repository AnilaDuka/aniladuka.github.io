import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles';
import Vue3Marquee from 'vue3-marquee';
import '@/assets/styles.scss';

createApp(App).use(Vue3Marquee).mount('#app');

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueParticles);

app.mount('#app');
