// src/components/__tests__/Event.test.js

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import moment from 'moment';

describe('<Event /> component', () => {
  const mockEvent = {
    "summary": "Learn JavaScript",
    "created": "2020-05-19T19:17:46.000Z",
    "location": "London, UK",
    "description": "Join us to explore JavaScript and its powerful features for web development."
  };

  beforeEach(() => {
    render(<Event event={mockEvent} />);
  });

  test('renders event information', () => {
    // Directly query for text, ensuring elements are present
    expect(screen.getByText(mockEvent.summary)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.location)).toBeInTheDocument();
    const formattedDate = moment(mockEvent.created).format('MMMM Do YYYY, h:mm:ss a');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  test('shows details when "Show Details" is clicked', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Show Details' }));

    // Utilize getByText for checking the presence of the description and button text change
    expect(screen.getByText(mockEvent.description)).toBeInTheDocument();
    expect(screen.getByText('Hide Details')).toBeInTheDocument();
  });

  test('hides details when "Hide Details" is clicked', async () => {
    const user = userEvent.setup();
    // Initial click to show details
    await user.click(screen.getByRole('button', { name: 'Show Details' }));
    // Second click to hide details
    await user.click(screen.getByRole('button', { name: 'Hide Details' }));

    // Use queryByText for checking the absence of the description
    expect(screen.queryByText(mockEvent.description)).not.toBeInTheDocument();
    expect(screen.getByText('Show Details')).toBeInTheDocument();
  });
});