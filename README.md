# React app with firebase backend

React app that uses firebase for authentication. It can be used as a starting point for a react app that uses a firebase backend and that require the user to create an account.

## how to run it?

1. Create a firebase project, and enable email/password authentication.

1. Create a ```.env.local``` with your firebase credentials. It is important that this file is located inside your app folder and not inside ```src```

1. Put your firebase credentials in the ```.env.local``` file (matching the names used in firebase.js) Alternatively, you can put your credentials in ```firebase.js``` directly. 
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
```

4. Run ```npm install```

5. Run ```npm start```
