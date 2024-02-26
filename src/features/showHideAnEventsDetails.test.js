import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user is viewing the list of upcoming events;', () => {
      AppComponent = render(<App />);
    });

    when('the user opens the event section;', async () => {
    });

    then("each event's details should be initially hidden or collapsed.", async () => {
      const events = document.querySelectorAll('.event');
      events.forEach(event => {
        const details = event.querySelector('.event-details');
        const isHidden = !details || details.style.display === 'none' || details.classList.contains('hidden');
        expect(isHidden).toBeTruthy();
      });
    });
    
  });

  test('User can expand an event to see details.', async ({ given, when, then }) => {
    given('the user is viewing the list of upcoming events and an event\'s details are collapsed;', async () => {
      render(<App />);
    });
  
    when('the user clicks on the event;', async () => {
      const user = userEvent.setup();
      const showDetailsButtons = await screen.findAllByText('Show Details');
      await user.click(showDetailsButtons[0]);
    });
  
    then('the details of that event should be expanded or shown.', async () => {
      await waitFor(() => {
        const detailText = /have you wondered how you can ask Google/i;
        const eventDetails = screen.queryByText(detailText);
        expect(eventDetails).toBeInTheDocument();
      });
    });
  });

  test('User can collapse an event to hide details.', async ({ given, and, when, then }) => {
    given('the user is viewing the list of upcoming events and an event\'s details are collapsed;', async () => {
      render(<App />);
    });
  
    and('the user has expanded an event to see its details;', async () => {
      const user = userEvent.setup();
      const showDetailsButtons = await screen.findAllByText('Show Details');
      await user.click(showDetailsButtons[0]);
    });
  
    when('the user clicks on the "Hide Details" button;', async () => {
      const user = userEvent.setup();
      const hideDetailsButton = await screen.findByText('Hide Details');
      await user.click(hideDetailsButton);
    });
  
    then('the details of that event should be collapsed or hidden.', () => {
      const eventDetails = screen.queryByText('Specific detail text');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
  
  
});
