import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlo1NPYbxKHNwo_EuQDJ2-vbWCIagyEXE",
  authDomain: "chaogpt.firebaseapp.com",
  projectId: "chaogpt",
  storageBucket: "chaogpt.appspot.com",
  messagingSenderId: "125022312073",
  appId: "1:125022312073:web:c3271db6766d5612a81858",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
