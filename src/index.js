import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import * as atatus from 'atatus-spa';
atatus.config('77a42ce24a824973b69fe4715289b612').install();

// Create a custom event to signal that the app can be installed
const installEvent = new CustomEvent('app-installable', {
  detail: {
    // Set the default value of `isInstallable` to `false`
    isInstallable: false,
    // Set the default value of `deferredPrompt` to `null`
    deferredPrompt: null,
  },
});

// Intercept the beforeinstallprompt event and redirect it to a custom event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent modal prompt from showing
  e.preventDefault();
  // Stash the event so it can be triggered later
  installEvent.detail.deferredPrompt = e;
  installEvent.detail.isInstallable = true;
  // Dispatch the custom event
  window.dispatchEvent(installEvent);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();