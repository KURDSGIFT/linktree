// ⚠️ ئەمە Firebase Config توانی - دەبێت بیگۆڕیتەوە بە config ی خۆت
// بچۆ: https://console.firebase.google.com → پرۆژەی نوێ دروست بکە → Project Settings → Your Apps → Add Web App

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// ✅ Storage پێویست نییە — وێنەکان بە Base64 لە Firestore پاشەکەوت دەکرێن (خۆڕایی)
const googleProvider = new firebase.auth.GoogleAuthProvider();
