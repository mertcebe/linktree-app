import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBt-4uCfysX5C4_kP8bKSZY74ekFgZ89iY",
  authDomain: "linktree-app-827fa.firebaseapp.com",
  projectId: "linktree-app-827fa",
  storageBucket: "linktree-app-827fa.appspot.com",
  messagingSenderId: "992070979935",
  appId: "1:992070979935:web:58822931927ff4dd6566ea",
  measurementId: "G-7WGKXZGJS9"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore();

const auth = getAuth();

const provider = new GoogleAuthProvider();

export {database, auth, provider};