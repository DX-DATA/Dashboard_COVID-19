import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Home';
import Vaccine from '../components/vaccine/Main';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/vaccine',
    name: 'Vaccine',
    component: Vaccine,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
