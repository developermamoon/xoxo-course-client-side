// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp8cExNvl3_YYLUwinbnXlvANRRi80GHI",
    authDomain: "xoxo-course-client-side.firebaseapp.com",
    projectId: "xoxo-course-client-side",
    storageBucket: "xoxo-course-client-side.appspot.com",
    messagingSenderId: "555456093434",
    appId: "1:555456093434:web:1212402751014c773d3d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;