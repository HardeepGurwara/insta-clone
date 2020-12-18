// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcBgipmt9tdby5niHAjZFkPL5SxDUl4Jg",
  authDomain: "insta-clone-10777.firebaseapp.com",
  projectId: "insta-clone-10777",
  storageBucket: "insta-clone-10777.appspot.com",
  messagingSenderId: "532282495431",
  appId: "1:532282495431:web:d541aee388e46743bec9e2",
  measurementId: "G-VVM5NEEZBD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

export { db, auth, storage };
