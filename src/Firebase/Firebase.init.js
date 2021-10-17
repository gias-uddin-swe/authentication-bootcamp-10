import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};
export default FirebaseInit;
