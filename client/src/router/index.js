import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Tracks from '@/components/Tracks'
import Artists from '@/components/Artists'
import RecentlyPlayed from '@/components/RecentlyPlayed'
import Recommendations from '@/components/Recommendations'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)

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
      component: About
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: Tracks,
      beforeEnter: authGuard

    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists,
      beforeEnter: authGuard

    },
    {
      path: '/recently-played',
      name: 'RecentlyPlayed',
      component: RecentlyPlayed,
      beforeEnter: authGuard

    },
    {
      path: '/recommendations',
      name: 'Recommendations',
      component: Recommendations,
      beforeEnter: authGuard

    }
  ]
})
