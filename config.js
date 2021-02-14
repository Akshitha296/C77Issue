import firebase from 'firebase/app';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCj2gosnR3uX7b4aH23i6TX-yrYJn2uGWs",
    authDomain: "barterapp-4a227.firebaseapp.com",
    projectId: "barterapp-4a227",
    storageBucket: "barterapp-4a227.appspot.com",
    messagingSenderId: "441755174168",
    appId: "1:441755174168:web:3966c2405286eecbe98a6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);