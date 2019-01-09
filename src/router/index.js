import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import PostsManager from '@/components/PostsManager'
import MDBootstrap from '@/components/MDBootstrap'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'About',
      component: About
    },
    {
      path: '/mdb',
      name: 'MDBootstrap',
      component: MDBootstrap
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager
    }
  ]
})
