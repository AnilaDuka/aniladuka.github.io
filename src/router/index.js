import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ViewWork from '@/views/ViewWork.vue';
import SpimSaas from '@/views/SpimSaas.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
  {
    path: '/my-projects',
    name: 'Projects',
    component: ViewWork,
  },
  {
    path: '/spim-saas',
    name: 'Spim SaaS',
    component: SpimSaas,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
