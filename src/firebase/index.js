import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let firebaseApp = null;
let databaseInstance = null;

export function initializeFirebase() {
  if (!firebaseApp) {
    const firebaseConfig = {
      databaseURL: "https://simples-crud-default-rtdb.firebaseio.com/",
      // apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      // authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      // projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      // storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      // messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      // appId: process.env.VUE_APP_FIREBASE_APP_ID,
    };

    firebaseApp = initializeApp(firebaseConfig);
  }

  return firebaseApp;
}

export function useDatabase() {
  if (!databaseInstance) {
    const app = initializeFirebase();
    databaseInstance = getDatabase(app);
  }
  return databaseInstance;
}
