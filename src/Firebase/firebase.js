import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6H38ef5_bzVLisLGoKVl6_Rvtg-POPb0",
  authDomain: "tunotebook-53b13.firebaseapp.com",
  projectId: "tunotebook-53b13",
  storageBucket: "tunotebook-53b13.appspot.com",
  messagingSenderId: "460113709685",
  appId: "1:460113709685:web:512534d9d4e2b87ab0c63c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;