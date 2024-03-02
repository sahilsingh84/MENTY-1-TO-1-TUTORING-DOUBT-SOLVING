import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getMessaging} from 'firebase/messaging'


const firebaseConfig = {
    apiKey: "AIzaSyBbRjZ5dWUGzqJdlk_qHDw8kU1VB5u0xQI",
    authDomain: "menty-f6f47.firebaseapp.com",
    projectId: "menty-f6f47",
    storageBucket: "menty-f6f47.appspot.com",
    messagingSenderId: "1060962653942",
    appId: "1:1060962653942:web:6c92003e11444a7dedfed7",
    measurementId: "G-W3YJ5ZPDM2"
  };

export const app = initializeApp(firebaseConfig);
export const messaging=getMessaging(app);
// const analytics = getAnalytics(app);