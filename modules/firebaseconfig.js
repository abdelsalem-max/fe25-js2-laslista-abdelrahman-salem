import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js';
import {getDatabase, ref} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwJLibvpo4rZ-UWvsSlfaTLZ3IDe3KW8Y",
  authDomain: "fir-project-70289.firebaseapp.com",
  databaseURL: "https://fir-project-70289-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-project-70289",
  storageBucket: "fir-project-70289.firebasestorage.app",
  messagingSenderId: "1085686876213",
  appId: "1:1085686876213:web:6283eae65701184103c97c"
};
  
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const booksRef = ref(db, '/books');
// export const booksRef = ref(db, '/kjlkjlkj');