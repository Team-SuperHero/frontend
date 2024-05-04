import './assets/main.css'

import "../css/main.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyA5I1520BlIBeti7GXpbmR2gppO39bkwzs",
    authDomain: "web-project-ef04e.firebaseapp.com",
    projectId: "web-project-ef04e",
    storageBucket: "web-project-ef04e.appspot.com",
    messagingSenderId: "352243397019",
    appId: "1:352243397019:web:1e8ffab497f8783873313e",
    measurementId: "G-CW9ZQ1ZNWZ"
  };
  
  initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


app.use(createPinia())
app.use(router)

app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

