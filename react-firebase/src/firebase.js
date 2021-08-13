import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9Bre-EKkgioZcLg85ocbKp2IcIQT_3RA",
  authDomain: "curso-react-firebase-1.firebaseapp.com",
  projectId: "curso-react-firebase-1",
  storageBucket: "curso-react-firebase-1.appspot.com",
  messagingSenderId: "154061657005",
  appId: "1:154061657005:web:5a2a1d45a75769e73c0724",
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
