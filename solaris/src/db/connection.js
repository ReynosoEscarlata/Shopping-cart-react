import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeXPPhPyySEx61ruIY7Xq-r1qqlIngBZg",
    authDomain: "solaris-ac85d.firebaseapp.com",
    projectId: "solaris-ac85d",
    storageBucket: "solaris-ac85d.appspot.com",
    messagingSenderId: "778862461165",
    appId: "1:778862461165:web:da00c678b6763a6e100ce4"
  };
  
  // Initialize Firebase
  let firebase = initializeApp(firebaseConfig);
  const db = getFirestore(firebase);

  export {db};