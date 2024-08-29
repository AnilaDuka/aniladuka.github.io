import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ViewWork from '@/views/ViewWork.vue';
import SpimSaas from '@/views/SpimSaas.vue';
import DigitWebsite from '@/views/DigitWebsite.vue';
import SpimWebsite from '@/views/SpimWebsite.vue';
import BiteCosmetics from '@/views/BiteCosmetics.vue';
import HmdEcommerce from '@/views/HmdEcommerce.vue';
import CielWebsite from '@/views/CielWebsite.vue';

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
  {
    path: '/digit-website',
    name: 'Digit Website',
    component: DigitWebsite,
  },
  {
    path: '/spim-website',
    name: 'Spim Website',
    component: SpimWebsite,
  },
  {
    path: '/bite-cosmetics',
    name: 'Bite Cosmetics',
    component: BiteCosmetics,
  },
  {
    path: '/hmd-ecommerce',
    name: 'Handmade Dresses E-commerce',
    component: HmdEcommerce,
  },
  {
    path: '/ciel-website',
    name: 'Ciel Website',
    component: CielWebsite,
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
