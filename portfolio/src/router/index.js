import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
