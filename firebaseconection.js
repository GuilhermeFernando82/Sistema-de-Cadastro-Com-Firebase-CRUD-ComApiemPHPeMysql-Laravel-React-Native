import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyDFI0Enq8Hwi7shQQEAT6MMID3x7TvXGf8",
    authDomain: "projetofirebaseauth-ae452.firebaseapp.com",
    databaseURL: "https://projetofirebaseauth-ae452.firebaseio.com",
    projectId: "projetofirebaseauth-ae452",
    storageBucket: "projetofirebaseauth-ae452.appspot.com",
    messagingSenderId: "407782953435",
    appId: "1:407782953435:web:99bbbaf03891156cf517fe",
    measurementId: "G-72WTFG30X8"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;