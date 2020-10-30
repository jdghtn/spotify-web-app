import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tracks from '../components/Tracks.vue'
import Artists from '../components/Artists.vue'
import RecentlyPlayed from '../components/RecentlyPlayed.vue'
import Recommendations from '../components/Recommendations.vue'
// import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    // {
    //   path: '/event/:id',
    //   name: 'single',
    //   component: () => import('../views/Single.vue'),
    //   // beforeEnter: authGuard
    // },
    {
      path: '/tracks',
      name: 'Tracks',
      component: Tracks
      // beforeEnter: authGuard
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
      // beforeEnter: authGuard
    },
    {
      path: '/recently-played',
      name: 'RecentlyPlayed',
      component: RecentlyPlayed
      // beforeEnter: authGuard
    },
    {
      path: '/recommendations',
      name: 'Recommendations',
      component: Recommendations
      // beforeEnter: authGuard
    }
  ]
})
