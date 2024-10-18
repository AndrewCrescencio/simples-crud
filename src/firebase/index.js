import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  //TODO: usar .env
  databaseURL: "https://simples-crud-default-rtdb.firebaseio.com/",

  //TODO: checar quais configurações precisam
  // apiKey: "SUA_API_KEY",
  // authDomain: "SEU_DOMINIO.firebaseapp.com",
  // databaseURL: "https://SEU_PROJETO.firebaseio.com",
  // projectId: "SEU_ID_DO_PROJETO",
  // storageBucket: "SEU_BUCKET_DE_ARMAZENAMENTO.appspot.com",
  // messagingSenderId: "SEU_ID_DO_MENSAGEIRO",
  // appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
