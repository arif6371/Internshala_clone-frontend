// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvUjzlcIgw11_83X5PRwaER8tEwU2vlIA",
  authDomain: "internshala-clone-dc575.firebaseapp.com",
  projectId: "internshala-clone-dc575",
  storageBucket: "internshala-clone-dc575.appspot.com",
  messagingSenderId: "22687156426",
  appId: "1:22687156426:web:f4ddfcda91ff3d8d7b8c33",
  measurementId: "G-84Z5ZNLS7W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}