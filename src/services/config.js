
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fakeikea2023.firebaseapp.com",
  projectId: "fakeikea2023",
  storageBucket: "fakeikea2023.appspot.com",
  messagingSenderId: "260545915294",
  appId: "1:260545915294:web:50df26e74cd7839d3ace8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);