// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDacRf_CM7Z_lGItlSAdsgrGLQyn4MwUAA",
  authDomain: "heavy-duty-tools.firebaseapp.com",
  projectId: "heavy-duty-tools",
  storageBucket: "heavy-duty-tools.appspot.com",
  messagingSenderId: "540292337800",
  appId: "1:540292337800:web:21cfd2628f451fef3c0f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;