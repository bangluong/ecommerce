// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyATYmlGGRu9NFDv5O6q3iR_DjGRmhnGeMU",
    authDomain: "ecommerce-57f2f.firebaseapp.com",
    projectId: "ecommerce-57f2f",
    storageBucket: "ecommerce-57f2f.appspot.com",
    messagingSenderId: "727929544292",
    appId: "1:727929544292:web:d2d502e40bbc54b0298971",
    measurementId: "G-3585KN1E7Q"
});

// Firebase storage reference
const storage = getStorage(firebaseConfig);
export default storage;