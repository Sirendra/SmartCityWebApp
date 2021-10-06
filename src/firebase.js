import firebase from 'firebase'

var config = {
your firebase config
};
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}