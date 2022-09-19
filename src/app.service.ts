import { Injectable } from '@nestjs/common';
import firebaseCred from '../testKey.json';
import * as firebase from 'firebase-admin'

@Injectable()
export class AppService {
  constructor() {
    const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIAL_JSON);

    firebase.initializeApp({
      credential: firebase.credential.cert(firebaseCred),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    })
  }

  
  
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8shq5l87XOy4kXs-aBkXmej0-B5kKWwo",
  authDomain: "push-notification-f220f.firebaseapp.com",
  projectId: "push-notification-f220f",
  storageBucket: "push-notification-f220f.appspot.com",
  messagingSenderId: "1057503803906",
  appId: "1:1057503803906:web:eef4b973b521d735b0851b",
  measurementId: "G-D3BSB7S8D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);