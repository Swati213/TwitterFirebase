import firebase from 'firebase'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz0f9MvjecrIQCZ1yM5qR30DAd3Vu8z78",
  authDomain: "reacttwitterclone.firebaseapp.com",
  projectId: "reacttwitterclone",
  storageBucket: "reacttwitterclone.appspot.com",
  messagingSenderId: "245559009198",
  appId: "1:245559009198:web:475ef68fbaedb52830323f",
  measurementId: "G-6MGLMQG3NK"

  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();


export default db;
