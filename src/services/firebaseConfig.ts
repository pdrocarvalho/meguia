import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDlyJkwO9ri2A4egTjwEIluyX4pI8XHRQ4',
  authDomain: 'me-guia-326302.firebaseapp.com',
  projectId: 'me-guia-326302',
  storageBucket: 'me-guia-326302.appspot.com',
  messagingSenderId: '460560137799',
  appId: '1:460560137799:web:ede3468c2f31e3aaa97b62',
  measurementId: 'G-LW6VWJ0Y4H',
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
