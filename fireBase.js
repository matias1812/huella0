import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMhkxtZpZrYVOHt4fSiRmw2AaO9b0-sO0",
  authDomain: "fatusdb-9bf88.firebaseapp.com",
  databaseURL: "https://fatusdb-9bf88-default-rtdb.firebaseio.com",
  projectId: "fatusdb-9bf88",
  storageBucket: "fatusdb-9bf88.appspot.com",
  messagingSenderId: "389237797784",
  appId: "1:389237797784:web:16ea80d1ff1ba1dbf2b1ed",
  measurementId: "G-72EVQ0P3G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)

export default firebaseConfig;
