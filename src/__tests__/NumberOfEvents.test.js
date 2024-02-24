// src/__tests__/NumberOfEvents.test.js

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Make sure to import userEvent
import '@testing-library/jest-dom';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let changeHandler;

  beforeEach(() => {
    // Mock the handler to simulate parent component's behavior
    changeHandler = jest.fn();
  });

  test('contains an element with the role of the textbox', () => {
    render(<NumberOfEvents onNumberChange={() => {}} />);
    // Using getByRole to find the input element with the role of "spinbutton" which is equivalent to a textbox that accepts numbers
    const textbox = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(textbox).toBeInTheDocument();
  });

  test('renders with default number of 32', () => {
    render(<NumberOfEvents onNumberChange={changeHandler} />);
    const input = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(input.value).toBe('32'); // Checks if the default value is set to 32
  });

  test('user interaction updates input value and triggers onNumberChange callback', async () => {
    const changeHandler = jest.fn();
    const user = userEvent.setup();
    render(<NumberOfEvents onNumberChange={changeHandler} defaultNumber={32} />);
    
    // Find the input element, which is a spinbutton due to its type being number
    const input = screen.getByRole('spinbutton', { name: /number of events:/i });

    // Simulate user interaction: clearing the input and typing a new value
    await user.clear(input);
    await user.type(input, '10');

    // Check if the input value changes as expected
    expect(input).toHaveValue(10);

    // Check if the onNumberChange handler was called with the new value
    expect(changeHandler).toHaveBeenCalledWith('10');
  });
});
