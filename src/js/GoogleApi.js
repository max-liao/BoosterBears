
// function init () {
//   gapi.load('auth2', function() { // Ready.
//     console.log(gapi);
//   })
// };
// export { init };

// function handleClientLoad () {
//   // Loads the client library and the auth2 library together for efficiency.
//   // Loading the auth2 library is optional here since `gapi.client.init` function will load
//   // it if not already loaded. Loading it upfront can save one network request.
//   gapi.load('client:auth2', initClient);
// }

// function initClient() {
//   // Initialize the client with API key and People API, and initialize OAuth with an
//   // OAuth 2.0 client ID and scopes (space delimited string) to request access.
//   gapi.client.init({
//     apiKey: 'AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA',
//     discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
//     clientId: '486106310535-ljijr6lhv67sj33787k84aqvddbsh09q.apps.googleusercontent.com',
//     scope: 'profile'
//   }).then(function () {
//     // Listen for sign-in state changes.
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
//     console.log(updateSigninStatus);
//     // Handle the initial sign-in state.
//     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//   });

//   var config = {
//     apiKey: "AIzaSyCAQ69TwLNNWW4TRn0zYsQV2GL2Tio4kSA",
//     authDomain: "first-pro-a1a2e.firebaseapp.com",
//     databaseURL: "https://first-pro-a1a2e.firebaseio.com",
//     projectId: "first-pro-a1a2e",
//     storageBucket: "first-pro-a1a2e.appspot.com",
//     messagingSenderId: "486106310535"
//   };
//   firebase.initializeApp(config);
// }

// function updateSigninStatus(isSignedIn) {
//   // When signin status changes, this function is called.
//   // If the signin status is changed to signedIn, we make an API call.
//   if (isSignedIn) {
//     makeApiCall();
//     console.log(isSignedIn);
//   }
// }

// function handleSignInClick(event) {
//   // Ideally the button should only show up after gapi.client.init finishes, so that this
//   // handler won't be called before OAuth is initialized.
//   gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignOutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }

// function makeApiCall() {
//   // Make an API call to the People API, and print the user's given name.
//   gapi.client.people.people.get({
//     'resourceName': 'people/me',
//     'requestMask.includeField': 'person.names'
//   }).then(function (response) {
//     console.log('Hello, ' + response.result.names[0].givenName);
//   }, function (reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// }
