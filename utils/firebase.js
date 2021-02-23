import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBZRQaXvzU3Mu5db1z54THK_oFcnw5-pyU",
    authDomain: "restaurants-420d2.firebaseapp.com",
    projectId: "restaurants-420d2",
    storageBucket: "restaurants-420d2.appspot.com",
    messagingSenderId: "718313901832",
    appId: "1:718313901832:web:f3e0e99e2c41827c61e6bd"
  }
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)