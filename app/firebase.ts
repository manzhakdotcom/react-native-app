import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9AAKy3ZAymtitYCa4fI-WQkVit78715k',
  authDomain: 'react-native-app-48781.firebaseapp.com',
  projectId: 'react-native-app-48781',
  storageBucket: 'react-native-app-48781.appspot.com',
  messagingSenderId: '274661116310',
  appId: '1:274661116310:web:4379a4ddd29af602e935b7',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
