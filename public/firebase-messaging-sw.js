importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAGgWN0_THodDfL6UYVLJcy54P16-6LNW0",
  authDomain: "pwa-notification-app-122b2.firebaseapp.com",
  databaseURL: "https://pwa-notification-app-122b2.firebaseio.com",
  projectId: "pwa-notification-app-122b2",
  storageBucket: "pwa-notification-app-122b2.appspot.com",
  messagingSenderId: "799406124021",
  appId: "1:799406124021:web:6538cb78f1ce7777b28ebc",
  measurementId: "G-SKLCTDENVZ",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
