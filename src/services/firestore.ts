import firebase from 'firebase';

require('firebase/firestore');
firebase.initializeApp({
  apiKey: 'AIzaSyAweP6Vz3PJYa02ijay3sbPkeXG3guxqUU',
  authDomain: 'facaseucurriculo-79fc3.firebaseapp.com',
  projectId: 'facaseucurriculo-79fc3',
});

export const firestoreDB = firebase.firestore();