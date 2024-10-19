import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

class FirebaseService {
  constructor() {
    this.firebaseApp = null;
    this.databaseInstance = null;
  }

  initializeFirebase() {
    if (!this.firebaseApp) {
      const firebaseConfig = {
        databaseURL: "https://simples-crud-default-rtdb.firebaseio.com/",
        // apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        // authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        // projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        // appId: process.env.VUE_APP_FIREBASE_APP_ID,
      };

      this.firebaseApp = initializeApp(firebaseConfig);
    }

    return this.firebaseApp;
  }

  getDatabase() {
    if (!this.databaseInstance) {
      const app = this.initializeFirebase();
      this.databaseInstance = getDatabase(app);
    }

    return this.databaseInstance;
  }
}

const firebaseService = new FirebaseService();
export default firebaseService;
