import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcgk3YKsLReo6GqB8bXzL9yvYMJEVuSH0",
  authDomain: "binar-ch9-firebase-b05b8.firebaseapp.com",
  projectId: "binar-ch9-firebase-b05b8",
  storageBucket: "binar-ch9-firebase-b05b8.appspot.com",
  messagingSenderId: "415795641082",
  appId: "1:415795641082:web:5a32619874e20986b1e743",
  measurementId: "G-Q3LSKNX04C",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
