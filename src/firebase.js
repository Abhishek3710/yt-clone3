import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgAxOudQR-p7Kc2US3hxO8wdZhl8I86IA",
  authDomain: "yt-clone3-7018e.firebaseapp.com",
  projectId: "yt-clone3-7018e",
  storageBucket: "yt-clone3-7018e.appspot.com",
  messagingSenderId: "534321836686",
  appId: "1:534321836686:web:4f7105f41ceadffe5b4fdf",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;
