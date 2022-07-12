import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAPQtc8TWEsQORoO3UqwEjMSi-Ud2B__m4",
    authDomain: "fir-project-e5317.firebaseapp.com",
    projectId: "fir-project-e5317",
    storageBucket: "fir-project-e5317.appspot.com",
    messagingSenderId: "1038866503744",
    appId: "1:1038866503744:web:2050b7e5110bffd7f7e7a5",
    measurementId: "G-KTZZCB3K1L"
  };

  const app=initializeApp(firebaseConfig)
  const auth= getAuth();
  firebase.initializeApp(firebaseConfig);

  export default firebase;

  export {app,auth}