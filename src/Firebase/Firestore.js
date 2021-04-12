import firebase from 'firebase/app'
import 'firebase/database';    // for realtime database
import 'firebase/storage'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDJ1JTO2xxYXC2qy92sQ-THY16QP1QAH_w",
    authDomain: "bookabieapp.firebaseapp.com",
    projectId: "bookabieapp",
    storageBucket: "bookabieapp.appspot.com",
    messagingSenderId: "210060414757",
    appId: "1:210060414757:web:0c1ae0a2d5c0d98e6094cc",
    measurementId: "G-MT8EDTRRMS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  const database = firebase.database();
  const firestore = firebase.firestore();
//   firestore.settings({
//     timestampsInSnapshots: true
//   });
  export {
    storage, database, firestore, firebase as default
}

