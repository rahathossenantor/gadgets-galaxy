// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQFrm0pxeW066aLtraSm0TrdPhAlQHfY",
  authDomain: "gadget-galaxy-gg.firebaseapp.com",
  projectId: "gadget-galaxy-gg",
  storageBucket: "gadget-galaxy-gg.appspot.com",
  messagingSenderId: "550692287361",
  appId: "1:550692287361:web:da4cf6e8983a9943efae80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
