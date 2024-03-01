// InstallButton.js
import React from 'react';

// Accept `deferredPrompt` as a prop
const InstallButton = ({ deferredPrompt }) => {
  const handleClick = () => {
    // Ensure `deferredPrompt` is not null
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  // Return a button to install the app
  return (
    <button id="installButton" onClick={handleClick} style={{ display: 'block' }}>
      Install App
    </button>
  );
};

export default InstallButton;
