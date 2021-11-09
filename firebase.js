// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0rN760Zann7-QJuLWNFRVUPirPWYdLzM',
  authDomain: 'insta2-6d030.firebaseapp.com',
  projectId: 'insta2-6d030',
  storageBucket: 'insta2-6d030.appspot.com',
  messagingSenderId: '556148688310',
  appId: '1:556148688310:web:442267c1ad7431807c2d17',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
