importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBbRjZ5dWUGzqJdlk_qHDw8kU1VB5u0xQI",
    authDomain: "menty-f6f47.firebaseapp.com",
    projectId: "menty-f6f47",
    storageBucket: "menty-f6f47.appspot.com",
    messagingSenderId: "1060962653942",
    appId: "1:1060962653942:web:6c92003e11444a7dedfed7",
    measurementId: "G-W3YJ5ZPDM2"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});