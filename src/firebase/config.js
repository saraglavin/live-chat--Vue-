import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUzT665ifGeYHh1ADRdAYrskioPC1Hijc",
    authDomain: "udemy-vue-firebase-24898.firebaseapp.com",
    projectId: "udemy-vue-firebase-24898",
    storageBucket: "udemy-vue-firebase-24898.appspot.com",
    messagingSenderId: "1068229868677",
    appId: "1:1068229868677:web:dcb32367a1f861fd627dec"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, timestamp }