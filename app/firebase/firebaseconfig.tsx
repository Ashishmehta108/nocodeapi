import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "dummy-api-key",
  authDomain: "dummy-auth-domain.firebaseapp.com",
  projectId: "dummy-project-id",
  storageBucket: "dummy-storage-bucket.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
