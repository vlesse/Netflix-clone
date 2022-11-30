import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9_4sfnZUfsyK444ChB4n4ezlq76JH7Rk",
  authDomain: "netflix-sll.firebaseapp.com",
  projectId: "netflix-sll",
  storageBucket: "netflix-sll.appspot.com",
  messagingSenderId: "1055419451681",
  appId: "1:1055419451681:web:53f782c64bde04278b1660"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };