import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCD7but7hSoyK6MkXXDtxy1LA2yXIp-dig",
    authDomain: "theworst-app.firebaseapp.com",
    databaseURL: "https://theworst-app.firebaseio.com",
    projectId: "theworst-app",
    storageBucket: "theworst-app.appspot.com",
    messagingSenderId: "938273366971",
    appId: "1:938273366971:web:37d8e8dff153ef9b11da9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();