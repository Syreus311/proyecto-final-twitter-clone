// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC4Zcgwyjh7PnsbmMpDiBG0bvdTRPKq76s',
    authDomain: 'proyecto-final-twitter.firebaseapp.com',
    projectId: 'proyecto-final-twitter',
    storageBucket: 'proyecto-final-twitter.appspot.com',
    messagingSenderId: '31037599729',
    appId: '1:31037599729:web:ea79de8ac70a021a9e9e50',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
