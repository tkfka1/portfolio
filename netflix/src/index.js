import React from 'react';
import App from './app';
import 'normalize.css';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './global-styles';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <>
        <GlobalStyles />
        <App />,
    </>
);