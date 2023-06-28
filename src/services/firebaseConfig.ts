// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD-rylJSdw49RhzkJhLJakCk8pwY4-hWIw",
//   authDomain: "vocab-builder-2023.firebaseapp.com",
//   projectId: "vocab-builder-2023",
//   storageBucket: "vocab-builder-2023.appspot.com",
//   messagingSenderId: "803231952313",
//   appId: "1:803231952313:web:a349457173db5937ca1a68",
//   measurementId: "G-WH7FRZR5Y2",
//   databaseURL:
//     "https://vocab-builder-2023.australia-southeast1.firebasedatabase.app/",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6-Zz3rLr7apFWFUUHjAKaH4t8k-lvBN0",
  authDomain: "learningwithtextdotcom.firebaseapp.com",
  projectId: "learningwithtextdotcom",
  storageBucket: "learningwithtextdotcom.appspot.com",
  messagingSenderId: "376078923134",
  appId: "1:376078923134:web:550d42c334bb86756e6f2f",
  measurementId: "G-H4HSX0CLKD",
  databaseURL:
    "https://learningwithtextdotcom.australia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
