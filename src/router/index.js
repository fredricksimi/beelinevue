import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Open_With_No_Deadline from '../views/Open_With_No_Deadline.vue'
import Open_Challenges from '../views/Open_Challenges.vue'
import Coming_Soon from '../views/Coming_Soon.vue'
import Archived_Challenges from '../views/Archived_Challenges.vue'
import All_Challenges from '../views/All_Challenges.vue'
import News from '../views/News.vue'
import News_Detail from '../views/News_Detail.vue'
import Submit_A_Challenge from '../views/Submit_A_Challenge.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/all-challenges',
    name: 'All_Challenges',
    component: All_Challenges
  },
  {
    path: '/open-challenges',
    name: 'Open_Challenges',
    component: Open_Challenges
  },
  {
    path: '/open-with-no-deadline',
    name: 'Open_With_No_Deadline',
    component: Open_With_No_Deadline
  },
  {
    path: '/coming-soon',
    name: 'Coming_Soon',
    component: Coming_Soon
  },
  {
    path: '/archived-challenges',
    name: 'Archived_Challenges',
    component: Archived_Challenges
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news-detail',
    name: 'News_Detail',
    component: News_Detail
  },
  {
    path: '/submit-a-challenge',
    name: 'Submit_A_Challenge',
    component: Submit_A_Challenge
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
