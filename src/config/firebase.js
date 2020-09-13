import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-aO6xr0fidVeNzqVrACv_yiQ6sANTu6c",
  authDomain: "ui-clone.firebaseapp.com",
  databaseURL: "https://ui-clone.firebaseio.com",
  projectId: "ui-clone",
  storageBucket: "ui-clone.appspot.com",
  messagingSenderId: "978388534095",
  appId: "1:978388534095:web:a5da7c2b28a1189af6fb3a",
  measurementId: "G-231424SW0V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
