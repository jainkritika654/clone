import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx_1MWU_5F-4flNgzouhgvT8l5gDFxO7E",
  authDomain: "clone-app-67f93.firebaseapp.com",
  projectId: "clone-app-67f93",
  storageBucket: "clone-app-67f93.appspot.com",
  messagingSenderId: "554496289340",
  appId: "1:554496289340:web:f60283264757a2a6783139",
  measurementId: "G-WSHPXHMZVL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
