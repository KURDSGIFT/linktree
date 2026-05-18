const firebaseConfig = {
  apiKey: "AIzaSyC_uIVl91zum9iFxA6eJHR05VHY6I4mH18",
  authDomain: "linktree-c4207.firebaseapp.com",
  projectId: "linktree-c4207",
  storageBucket: "linktree-c4207.firebasestorage.app",
  messagingSenderId: "811191206845",
  appId: "1:811191206845:web:b089f235e4df98619e88d4",
  measurementId: "G-TBTGBBE07Q"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
