import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'
let firebaseConfig = {
  apiKey: "AIzaSyAWdLMTucttqshO6LJ2epankx77L9wCq6w",
  authDomain: "projetodeteste-f61ef.firebaseapp.com",
  databaseURL: "https://projetodeteste-f61ef.firebaseio.com",
  projectId: "projetodeteste-f61ef",
  storageBucket: "projetodeteste-f61ef.appspot.com",
  messagingSenderId: "456641040280",
  appId: "1:456641040280:web:48f4ab52f163b8ceb6e5ed",
  measurementId: "G-181095SN7S"
};
// Initialize Firebase
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

  
  export default firebase;