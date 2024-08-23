import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles';
// import VueMarqueeSlider from 'vue-marquee-slider';
// import Vue from 'vue';
// Vue.use(VueMarqueeSlider);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueParticles);

app.mount('#app');
