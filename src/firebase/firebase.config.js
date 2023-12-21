// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi54mM2SNWPbY14vpksyiRBgWMG5Jrk3s",
  authDomain: "task-management-system-30503.firebaseapp.com",
  projectId: "task-management-system-30503",
  storageBucket: "task-management-system-30503.appspot.com",
  messagingSenderId: "1055547854751",
  appId: "1:1055547854751:web:14ddffed15fc95b573b7aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;