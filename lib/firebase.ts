// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA1FtUW54Hp1F74uLdwKUPEe3_PVRFobU",
  authDomain: "zain-8fa09.firebaseapp.com",
  databaseURL: "https://zain-8fa09-default-rtdb.firebaseio.com",
  projectId: "zain-8fa09",
  storageBucket: "zain-8fa09.firebasestorage.app",
  messagingSenderId: "617837090662",
  appId: "1:617837090662:web:81421024d76054923c9aa7",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
