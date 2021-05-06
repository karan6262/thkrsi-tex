import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCXpu08XiLLU6tnTG3R9BTLR6KzFF-jK34",
  authDomain: "thk-tex-db.firebaseapp.com",
  projectId: "thk-tex-db",
  storageBucket: "thk-tex-db.appspot.com",
  messagingSenderId: "418648090542",
  appId: "1:418648090542:web:eea15268479a5c79504a3f",
  measurementId: "G-T7K8VD6N5V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
