// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as storage from "firebase/storage";
import * as firestore from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWg5NrIj6_3rJOPIXqIGfkVCs0bM_yMsk",
  authDomain: "minterest-3e6c0.firebaseapp.com",
  projectId: "minterest-3e6c0",
  storageBucket: "minterest-3e6c0.appspot.com",
  messagingSenderId: "668960728410",
  appId: "1:668960728410:web:a86b374347c102df587f63"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = storage;
const projectFirestore = firestore;

export { projectStorage, projectFirestore };
