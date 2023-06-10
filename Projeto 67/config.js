import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBB8zuuVn_TEsSAVUbRxhM7nEDowOLvuuk",
  authDomain: "aulateste-c4a68.firebaseapp.com",
  databaseURL: "https://aulateste-c4a68-default-rtdb.firebaseio.com",
  projectId: "aulateste-c4a68",
  storageBucket: "aulateste-c4a68.appspot.com",
  messagingSenderId: "229088981236",
  appId: "1:229088981236:web:3caaa3f8fbdd05b63a6ea1",
  measurementId: "G-NYF69EGBLY"
};




};
// Initialice o Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();