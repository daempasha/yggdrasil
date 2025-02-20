import app from 'firebase/app';
import 'firebase/auth';
import { useStore } from 'react-redux';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth = app.auth;
        this.provider = new app.auth.GoogleAuthProvider();
    }

    doSignInWithPopup = () => {

    }

    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => { this.auth.signOut() }
}
  
export default Firebase;