
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-a7C8dqRiplU_Nvj5wXByWGfRZ-guXc",
  authDomain: "blogzinho-90a3a.firebaseapp.com",
  projectId: "blogzinho-90a3a",
  storageBucket: "blogzinho-90a3a.appspot.com",
  messagingSenderId: "1063941303495",
  appId: "1:1063941303495:web:6def34b96b0f23eae322e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };