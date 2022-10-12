import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyj_9brFxIDOiH41SARsTxz99TzaQSzOM",
  authDomain: "marketplace-9ebd1.firebaseapp.com",
  projectId: "marketplace-9ebd1",
  storageBucket: "marketplace-9ebd1.appspot.com",
  messagingSenderId: "371675051382",
  appId: "1:371675051382:web:f12673c600d09c9585f657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
