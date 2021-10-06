import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAcBke-3zk363Ml8i_1YYRGDluKeB9_W7I",
  authDomain: "final-project-4c167.firebaseapp.com",
  projectId: "final-project-4c167",
  storageBucket: "final-project-4c167.appspot.com",
  messagingSenderId: "573930368307",
  appId: "1:573930368307:web:8d2c157f785348506d2246"
};
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}