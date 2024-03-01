// InstallButton.js
import React from 'react';

const InstallButton = () => {
  const handleClick = () => {
    // Show the install prompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;

    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    promptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // We no longer need the prompt. Clear it up.
      window.deferredPrompt = null;
    });
  };

  return (
    <button id="installButton" onClick={handleClick} style={{ display: 'block' }}>
      Install App
    </button>
  );
};

export default InstallButton;
