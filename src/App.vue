<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Booster Bears</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about-us">About Us</b-nav-item>
          <b-nav-item to="/mdb">MDB Tutorial</b-nav-item>
          <b-nav-item to="/posts-manager">Posts Manager</b-nav-item>
          <b-nav-item href="#" v-if="!activeUser" v-on:click=handleSignInClick>Sign In</b-nav-item>
          <b-nav-item href="#" v-else @click.prevent=handleSignOutClick>Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      <!-- routes will be rendered here -->
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
<script type='text/javascript' src='./router/config.js'></script>
<script>
import DBrouter from './db/server.js'

export default {
  name: 'app',
  data () {
    return {
      activeUser: false
    }
  },
  methods: {
    async handleSignInClick (event) {
      // Ideally the button should only show up after gapi.client.init finishes, so that this
      // handler won't be called before OAuth is initialized.
      await this.$gAuth.getAuthCode().then(authCode => {
        console.log('Sign In')
        console.log(authCode)
        DBrouter.Adduser(authCode)
        // return this.$http.post('', { code: authCode, redirect_uri: 'postmessage' })
      }).then(response => {
        // after ajax
        this.activeUser = true
      }).catch(error => {
        // on fail do something
        console.log(error)
      })
    },
    handleSignOutClick (event) {
      this.$gAuth.signOut().then(() => {
        console.log('Sign Out')
        this.activeUser = false
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
