import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Anasayfa from '../views/Anasayfa.vue'
import Divided from '../views/Divided.vue'
import Contact from '../views/Contact.vue'
import Profil from '../views/Profil.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anasayfa',
    name: 'anasayfa',
    component: Anasayfa,
  },
  {
    path: '/divided',
    name: 'divided',
    component: Divided,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/profil',
    name: 'profil',
    component: Profil,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
