import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostsManager from '@/components/PostsManager'
import MDBootstrap from '@/components/MDBootstrap'
import About from '@/components/About'

// import GoogleAuth from 'vue-google-authenticator'
// Vue.use(GoogleAuth, { client_id: '486106310535-ljijr6lhv67sj33787k84aqvddbsh09q.apps.googleusercontent.com' })
// Vue.googleAuth().load()
// Vue.googleAuth().directAccess()
// Vue.googleAuth().signIn(function (googleUser) {
//   console.log(googleUser)
// }, function (error) {
//   console.log(error)
// })

import Auth from '@okta/okta-vue'
Vue.use(Auth, {
  issuer: 'https://dev-484477.oktapreview.com/oauth2/default',
  client_id: '0oahxl9nleW4pEL870h7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
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
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
