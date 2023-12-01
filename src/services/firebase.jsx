// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDcTHC_B6gGhefqfc2CKPONnFYG0RbfMAQ",
  authDomain: "integra-dc8cb.firebaseapp.com",
  projectId: "integra-dc8cb",
  storageBucket: "integra-dc8cb.appspot.com",
  messagingSenderId: "1033381786294",
  appId: "1:1033381786294:web:d42b9a5f3cb8944b30ec17"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
