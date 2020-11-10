import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA_MxnlYgofYiBWTH6arDprMYqOKBo_VHc",
  authDomain: "crown-db-d6a21.firebaseapp.com",
  databaseURL: "https://crown-db-d6a21.firebaseio.com",
  projectId: "crown-db-d6a21",
  storageBucket: "crown-db-d6a21.appspot.com",
  messagingSenderId: "680725630862",
  appId: "1:680725630862:web:1212f13da1e8d76b1ededf",
  measurementId: "G-M050QR50E9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



