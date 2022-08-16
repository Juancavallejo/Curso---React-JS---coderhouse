
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCx1bnhxFEKLkWgAn1vrVvPvJQ_wsCnHQ",
  authDomain: "reactcoderhouse-3c93e.firebaseapp.com",
  projectId: "reactcoderhouse-3c93e",
  storageBucket: "reactcoderhouse-3c93e.appspot.com",
  messagingSenderId: "671435237896",
  appId: "1:671435237896:web:10421d0875d068c3b87fbd"
};

const app = initializeApp(firebaseConfig);

 export const dataBase = getFirestore (app)