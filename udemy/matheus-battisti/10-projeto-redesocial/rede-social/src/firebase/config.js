import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyAVmP5DhRYSlhYPzZKsq_PSVgQDagVQCzo',
   authDomain: 'redesocial-15e5f.firebaseapp.com',
   projectId: 'redesocial-15e5f',
   storageBucket: 'redesocial-15e5f.appspot.com',
   messagingSenderId: '106626977931',
   appId: '1:106626977931:web:c5e676b97959235063448e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth };
