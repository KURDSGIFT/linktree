// ⚠️ ئەمە Firebase Config توانی - دەبێت بیگۆڕیتەوە بە config ی خۆت
// بچۆ: https://console.firebase.google.com → پرۆژەی نوێ دروست بکە → Project Settings → Your Apps → Add Web App

const firebaseConfig = {
  apiKey: "AIzaSyBhYiFcQeB2r6CWDiFvqV0LUPNVoow1sjM",
  authDomain: "appmass-f26bd.firebaseapp.com",
  projectId: "appmass-f26bd",
  messagingSenderId: "735578268323",
  appId: "1:735578268323:web:4f5e27ce1307db429bd516"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
// ✅ Storage پێویست نییە — وێنەکان بە Base64 لە Firestore پاشەکەوت دەکرێن (خۆڕایی)
const googleProvider = new firebase.auth.GoogleAuthProvider();
