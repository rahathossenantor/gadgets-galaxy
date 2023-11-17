// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

/*

VITE_apiKey=AIzaSyBtQFrm0pxeW066aLtraSm0TrdPhAlQHfY
VITE_authDomain=gadget-galaxy-gg.firebaseapp.com
VITE_projectId=gadget-galaxy-gg
VITE_storageBucket=gadget-galaxy-gg.appspot.com
VITE_messagingSenderId=550692287361
VITE_appId=1:550692287361:web:da4cf6e8983a9943efae80

*/
