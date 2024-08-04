import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsFYjwCDF3Rrmu2ujOAjPxPm4zTMCh3A",
  authDomain: "pantry-tracker-d56dc.firebaseapp.com",
  projectId: "pantry-tracker-d56dc",
  storageBucket: "pantry-tracker-d56dc.appspot.com",
  messagingSenderId: "96887574274",
  appId: "1:96887574274:web:4c1e8ddfc4301153483c1b",
  measurementId: "G-GB0E7HF9GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics if supported
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      // Analytics initialized
    } else {
      console.log('Firebase Analytics is not supported in this environment.');
    }
  });
}