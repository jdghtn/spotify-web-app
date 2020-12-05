import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/features/Home';
import About from '@/features/About';
import Tracks from '@/features/Tracks';
import Artists from '@/features/Artists';
import RecentlyPlayed from '@/features/RecentlyPlayed';
import Recommendations from '@/features/Recommendations';
import { authGuard } from '../auth/authGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: Tracks,
      beforeEnter: authGuard,
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists,
      beforeEnter: authGuard,
    },
    {
      path: '/recently-played',
      name: 'RecentlyPlayed',
      component: RecentlyPlayed,
      beforeEnter: authGuard,
    },
    {
      path: '/recommendations',
      name: 'Recommendations',
      component: Recommendations,
      beforeEnter: authGuard,
    },
  ],
});
