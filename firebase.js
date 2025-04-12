// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';  // Direct import for getAuth
// import { getFirestore } from 'firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUVH16q3p_5FzgMLHD_1wDReY4rN43zlM",
//   authDomain: "eventorganizerapp-19447.firebaseapp.com",
//   projectId: "eventorganizerapp-19447",
//   storageBucket: "eventorganizerapp-19447.appspot.com",
//   messagingSenderId: "758306168371",
//   appId: "1:758306168371:web:b210550362913460cd0d46",
//   measurementId: "G-8EJM074Q8Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Auth with persistence for React Native
// const auth = getAuth(app);

// // Initialize Firestore database
// const firestore = getFirestore(app);  // Firestore initialized here

// export { auth, firestore };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Ensure getFirestore is imported
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUVH16q3p_5FzgMLHD_1wDReY4rN43zlM",
  authDomain: "eventorganizerapp-19447.firebaseapp.com",
  projectId: "eventorganizerapp-19447",
  storageBucket: "eventorganizerapp-19447.appspot.com",
  messagingSenderId: "758306168371",
  appId: "1:758306168371:web:b210550362913460cd0d46",
  measurementId: "G-8EJM074Q8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export the initialized auth and db