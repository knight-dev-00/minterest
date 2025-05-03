// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as storage from "firebase/storage";
import * as firestore from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "minterest-3e6c0.firebaseapp.com",
  projectId: "minterest-3e6c0",
  storageBucket: "minterest-3e6c0.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = storage;
const projectFirestore = firestore;

export { projectStorage, projectFirestore };
