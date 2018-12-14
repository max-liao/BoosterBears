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
          <b-nav-item href="#" v-if="!activeUser">
            <button id="signin-button" v-on:click=handleSignInClick>Sign In</button>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
          </b-nav-item>
          <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
          <button id="signout-button" v-on:click='handleSignOutClick'>Sign Out</button>
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

<script>
var gapi = require('gapi')
var firebase = require('firebase')
gapi.server.setApiKey('AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA')

// Initialize the client with API key and People API, and initialize OAuth with an
// OAuth 2.0 client ID and scopes (space delimited string) to request access.
gapi.client.init({
  apiKey: 'AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA',
  discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
  clientId: '486106310535-ljijr6lhv67sj33787k84aqvddbsh09q.apps.googleusercontent.com',
  scope: 'profile'
}).then(function () {
  // Listen for sign-in state changes.
  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
  console.log(updateSigninStatus)
  // Handle the initial sign-in state.
  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
})

var config = {
  apiKey: 'AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA',
  authDomain: 'first-pro-a1a2e.firebaseapp.com',
  databaseURL: 'https://first-pro-a1a2e.firebaseio.com',
  projectId: 'first-pro-a1a2e',
  storageBucket: 'first-pro-a1a2e.appspot.com',
  messagingSenderId: '486106310535'
}

firebase.initializeApp(config)

function updateSigninStatus (isSignedIn) {
  // When signin status changes, this function is called.
  // If the signin status is changed to signedIn, we make an API call.
  if (isSignedIn) {
    makeApiCall()
    console.log(isSignedIn)
  }
}

function makeApiCall () {
  // Make an API call to the People API, and print the user's given name.
  gapi.client.people.people.get({
    'resourceName': 'people/me',
    'requestMask.includeField': 'person.names'
  }).then(function (response) {
    console.log('Hello, ' + response.result.names[0].givenName)
  }, function (reason) {
    console.log('Error: ' + reason.result.error.message)
  })
}

export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    onSignIn (googleUser) {
      var profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    },
    handleSignInClick (event) {
      // Ideally the button should only show up after gapi.client.init finishes, so that this
      // handler won't be called before OAuth is initialized.
      gapi.auth2.getAuthInstance().signIn()
    },
    handleSignOutClick (event) {
      gapi.auth2.getAuthInstance().signOut()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
