import firebase from 'firebase/app'
import 'firebase/database';    // for realtime database
import 'firebase/storage'
import 'firebase/firestore';

const API_KEY = `${process.env.FIREBASE_API_KEY}`;
const FIREBASEAUTHDOMIAN = `${process.env.FIREBASE_AUTHDOMIAN}`;
const PROJECT_ID = `${process.env.PROJECTID}`;
const STORAGEBUCKET = `${process.env.STORAGE_BUCKET}`;
const MESSAGINGSENDERID = `${process.env.MESSAGING_SENDER_ID}`;
const APPID = `${process.env.APP_ID}`;
const MEASUREMENTID = `${process.env.MEASUREMENT_ID}`;

console.log(API_KEY)

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: FIREBASEAUTHDOMIAN,
    projectId: PROJECT_ID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
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

