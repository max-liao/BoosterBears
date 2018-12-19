// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import GAuth from 'vue-google-oauth2'
import Config from './config.js'
// import VueGAPI from 'vue-gapi'

Vue.use(GAuth, {clientId: Config.config.clientId, scope: 'profile email https://www.googleapis.com/auth/plus.login'})
Vue.use(BootstrapVue)
// Vue.use(VueGAPI, Config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
