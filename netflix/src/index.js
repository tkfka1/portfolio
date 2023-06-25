import React from 'react';
import App from './app';
import 'normalize.css';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './global-styles';
import { firebase,auth } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <>
    <FirebaseContext.Provider value={{ firebase,auth }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>
    </>
);