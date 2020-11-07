import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Tracks from '@/views/Tracks'
import Artists from '@/views/Artists'
import RecentlyPlayed from '@/views/RecentlyPlayed'
import Recommendations from '@/views/Recommendations'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)
Vue.use(Vuex)

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
