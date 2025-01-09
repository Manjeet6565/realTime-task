// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCEaUz3oZ5--tM2pEWJIayjbvh95ng3nA",
  authDomain: "task-mangaemet-dashboard.firebaseapp.com",
  databaseURL: "https://task-mangaemet-dashboard-default-rtdb.firebaseio.com",
  projectId: "task-mangaemet-dashboard",
  storageBucket: "task-mangaemet-dashboard.firebasestorage.app",
  messagingSenderId: "1036421155532",
  appId: "1:1036421155532:web:1821d54b45245c34a4d069",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
