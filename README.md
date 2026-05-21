# ⚡ LinkHub — ڕێنمایی دامەزراندن

## فایلەکان
```
linkhub/
├── index.html        ← ماڵپەری سەرەکی
├── auth.html         ← چوونەژوورەوە / تۆمارکردن
├── dashboard.html    ← داشبۆردی بەکارهێنەر
├── profile.html      ← لاپەڕەی گشتی (?u=username)
├── css/main.css      ← ستایل
└── js/config.js      ← Firebase Config (مهمە!)
```

---

## هەنگاو ١ — Firebase دروست بکە (خۆڕایی)

١. بچۆ: **https://console.firebase.google.com**
٢. کلیک بکە لەسەر **"Add project"** → ناوی پرۆژەکەت بنووسە
٣. بچۆ **Authentication** → **Get started** → چالاک بکە:
   - Email/Password ✓
   - Google ✓
٤. بچۆ **Firestore Database** → **Create database** → **Start in test mode**
٥. بچۆ **Storage** → **Get started** → **Start in test mode**
٦. بچۆ **Project Settings** → **Your apps** → کلیک بکە `</>` → ناوی app بنووسە

---

## هەنگاو ٢ — Config بگۆڕە

کۆپی بکە ئەو config-ە کە Firebase دایتت و بینێ لە **js/config.js**:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};
```

---

## هەنگاو ٣ — Firestore Rules دامەزرێنە

بچۆ **Firestore → Rules** و ئەمەی خوارەوە بینێ:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
    match /usernames/{username} {
      allow read: if true;
      allow create: if request.auth != null;
    }
  }
}
```

---

## هەنگاو ٤ — Storage Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /photos/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

---

## هەنگاو ٥ — بڵاوکردنەوە بە Netlify

١. هەموو فایلەکان لە یەک فۆڵدەر دابنێ
٢. بچۆ **netlify.com** → **Add new site** → **Deploy manually**
٣. فۆڵدەرەکە بکێشە ناو Netlify

---

## ئادرەسی پرۆفایل

```
https://your-site.netlify.app/profile.html?u=USERNAME
```

---

## پرسیار هەتیت؟

Claude زانی پاسخی بداتەوە! 😄
