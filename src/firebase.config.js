import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBHBGg3oSc8Uazg530pwx1mnn-oip70Wlg",
    authDomain: "next-meal-1bfdf.firebaseapp.com",
    projectId: "next-meal-1bfdf",
    storageBucket: "next-meal-1bfdf.appspot.com",
    messagingSenderId: "109663424358",
    appId: "1:109663424358:web:494d2a8e76c109357982a7",
    measurementId: "G-54FNJEZ04J"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;