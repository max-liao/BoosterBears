var gapi = require('gapi')
var firebase = require('firebase')

var config = {
  apiKey: 'AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA',
  authDomain: 'first-pro-a1a2e.firebaseapp.com',
  clientId: '486106310535-ljijr6lhv67sj33787k84aqvddbsh09q.apps.googleusercontent.com',
  databaseURL: 'https://first-pro-a1a2e.firebaseio.com',
  projectId: 'first-pro-a1a2e',
  storageBucket: 'first-pro-a1a2e.appspot.com',
  messagingSenderId: '486106310535',

  init: function () {
    // Initialize the client with API key and People API, and initialize OAuth with an
    // OAuth 2.0 client ID and scopes (space delimited string) to request access.
    // gapi.server.setApiKey(config.apiKey)
    gapi.client.init({
      apiKey: config.apiKey,
      discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
      clientId: config.clientId,
      scope: 'profile'
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
      console.log(updateSigninStatus)
      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
    })
    firebase.initializeApp(config)
  },

  updateSigninStatus: function (isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
      makeApiCall()
      console.log(isSignedIn)
    }
  },
  
  makeApiCall: function() {
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
}
