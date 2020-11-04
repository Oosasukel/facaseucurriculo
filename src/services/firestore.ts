import firebase from 'firebase/app';

require('firebase/firestore');
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CLOUD_FIRESTORE_PROJECT_ID,
});

export const firestoreDB = firebase.firestore();