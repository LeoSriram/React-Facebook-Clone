import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1oIFHLGRYQxUuTOzXcw4R7_bhhAfXl58",
  authDomain: "facebook-clone-d9b6d.firebaseapp.com",
  databaseURL: "https://facebook-clone-d9b6d.firebaseio.com",
  projectId: "facebook-clone-d9b6d",
  storageBucket: "facebook-clone-d9b6d.appspot.com",
  messagingSenderId: "1080426196038",
  appId: "1:1080426196038:web:5af6f71eb67bb9c4c16e47",
  measurementId: "G-1TKT0BT7FS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
