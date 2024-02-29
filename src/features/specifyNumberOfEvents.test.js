import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('the user has not specified the number of events to be displayed;', () => {
    });

    let AppComponent;
    when('the user opens the app or navigates to the event section;', () => {
      AppComponent = render(<App />);
    });

    then('the user should see a default list of 32 upcoming events.', async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole('listitem');
        expect(eventItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('the user is viewing the list of upcoming events;', () => {
      render(<App />);
    });

    when('the user selects a different number of events from the settings or preferences menu;', async () => {
      const user = userEvent.setup();
      const numberOfEventsInput = screen.getByRole('spinbutton', { name: /number of events:/i });
      await user.clear(numberOfEventsInput);
      await user.type(numberOfEventsInput, '{backspace}');
    });

    then('the list of events should update to display the specified number of events accordingly.', async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole('listitem');
        expect(eventItems.length).toBe(3);
      });
    });
  });
});
