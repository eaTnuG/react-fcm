importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyB46BFF1hZKLJu_s9lP9PORSaLIhgGZ-rQ",
    authDomain: "react-fcm-test-b4ddb.firebaseapp.com",
    databaseURL: "https://react-fcm-test-b4ddb.firebaseio.com",
    projectId: "react-fcm-test-b4ddb",
    storageBucket: "react-fcm-test-b4ddb.appspot.com",
    messagingSenderId: "1073659251497",
    appId: "1:1073659251497:web:80360a40920d1c1ac44538",
  };


firebase.initializeApp(config);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((message) => {
//     console.log(`bgm: ${message}`);
//   });
  
//   messaging.onMessage((message) => {
//     console.log(`msg: ${message}`);
//   });
  
messaging.bgMessageHandler = function(msg) {
    console.log('in')
    console.log(msg)
}
