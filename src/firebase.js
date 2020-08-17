import firebase from 'firebase'

// GET apiKey JSON FROM FIREBASE :- DATABASE -> SETTINGS -> GENERAL -> YOUR APPS -> CONFIG
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHQukFCfmrZ2c2Qjh3bKCncYiyHPNHRPw",
    authDomain: "instagram-app-2132b.firebaseapp.com",
    databaseURL: "https://instagram-app-2132b.firebaseio.com",
    projectId: "instagram-app-2132b",
    storageBucket: "instagram-app-2132b.appspot.com",
    messagingSenderId: "613366300474",
    appId: "1:613366300474:web:866e514da26a448bf31a03",
    measurementId: "G-HWYLKK98XL"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


