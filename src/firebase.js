import firebase from "firebase";


  const firebaseConfig = {
    apiKey: "AIzaSyB4Vt040bC9EXGWZfyH0RX1Qj3zRCfR1tg",
    authDomain: "netflix-clone-31f57.firebaseapp.com",
    projectId: "netflix-clone-31f57",
    storageBucket: "netflix-clone-31f57.appspot.com",
    messagingSenderId: "417996917134",
    appId: "1:417996917134:web:97ce3ba5f211fcdbb63cdf",
    measurementId: "G-1R1RP0ZE6G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
