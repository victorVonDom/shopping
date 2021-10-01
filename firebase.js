var firebaseConfig = {
    apiKey: "AIzaSyDng2ei7jUJ7gAJDrCBif0naJQhGPdMNng",
    authDomain: "clone-two-e38e4.firebaseapp.com",
    projectId: "clone-two-e38e4",
    storageBucket: "clone-two-e38e4.appspot.com",
    messagingSenderId: "901407023369",
    appId: "1:901407023369:web:246bc3041c6c4b962633d8",
    measurementId: "G-P8W6DZ2WQ4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();