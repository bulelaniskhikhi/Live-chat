import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC8l4e0Yi6c3OhXt2VsCAn-2Ajy84NkRh4",
  authDomain: "xena-live-chat.firebaseapp.com",
  projectId: "xena-live-chat",
  storageBucket: "xena-live-chat.appspot.com",
  messagingSenderId: "673458012737",
  appId: "1:673458012737:web:9aec707e9a6e6c47cf3cc0"
};

  // init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectAuth, projectFirestore, timestamp }