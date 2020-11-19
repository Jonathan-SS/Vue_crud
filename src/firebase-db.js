import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCO7bN7m6O5j6wu7Za4z399yL-n_ircPeM",
    authDomain: "crud-vue-e79ea.firebaseapp.com",
    databaseURL: "https://crud-vue-e79ea.firebaseio.com",
    projectId: "crud-vue-e79ea",
    storageBucket: "crud-vue-e79ea.appspot.com",
    messagingSenderId: "370138843956",
    appId: "1:370138843956:web:7d79fcdf451cebb27af361"
  })
  .firestore();

export const postRef = db.collection("posts");
