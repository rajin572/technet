import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCs9TRyluwT5HZeYabbpQa9-tkhVA28XRo',
  authDomain: 'tech-net-789d2.firebaseapp.com',
  projectId: 'tech-net-789d2',
  storageBucket: 'tech-net-789d2.appspot.com',
  messagingSenderId: '667198726786',
  appId: '1:667198726786:web:67a33f36b506ea733b4a9b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
