import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAofZhAkPX2K2P2FlYxSSluD2LjL8Gqs20",
  authDomain: "entregafinalreactradaelli.firebaseapp.com",
  projectId: "entregafinalreactradaelli",
  storageBucket: "entregafinalreactradaelli.appspot.com",
  messagingSenderId: "481358152864",
  appId: "1:481358152864:web:4ce6a62fb29a007d8fb5c5"
};


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)