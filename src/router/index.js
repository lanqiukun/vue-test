import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
