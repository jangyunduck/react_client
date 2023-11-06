import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBblG2i3i0Q6RVUVQeQypQFsOL8tXF4bYQ",
  authDomain: "react-community-c565f.firebaseapp.com",
  projectId: "react-community-c565f",
  storageBucket: "react-community-c565f.appspot.com",
  messagingSenderId: "51246033074",
  appId: "1:51246033074:web:65ffc814742d0915f281ab",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;