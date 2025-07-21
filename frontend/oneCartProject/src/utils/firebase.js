import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,        // 🔁 FIXED: add VITE_ prefix
  authDomain: "loginonecart-62768.firebaseapp.com",
  projectId: "loginonecart-62768",
  storageBucket: "loginonecart-62768.appspot.com",      // 🔁 FIXED: should be firebaseapp.com not storage.app
  messagingSenderId: "206944859835",
  appId: "1:206944859835:web:48376db79a27c159ea5b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for use in app
export { auth, provider };
