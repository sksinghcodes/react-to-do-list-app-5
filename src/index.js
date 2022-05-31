import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

setScreenHeight();
window.onresize = setScreenHeight;

function setScreenHeight() {
    document.documentElement.style.setProperty('--screen-height', window.innerHeight + 'px');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);