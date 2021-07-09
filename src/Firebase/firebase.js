import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAFqBwN3cAxRDIYl0XpEPtuihP-vw92Z0E",
    authDomain: "escala-6d8aa.firebaseapp.com",
    projectId: "escala-6d8aa",
    storageBucket: "escala-6d8aa.appspot.com",
    messagingSenderId: "948498426654",
    appId: "1:948498426654:web:2b25ba0624a0e60a6a370f",
    measurementId: "G-1HEJXXZNJB"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore()