import firebase from "firebase";

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

export const initNotification = () => {
  Notification.requestPermission().then((permission) => {
    console.log("Permission:" + permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("token => ", currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
};
