// src/__tests__/NumberOfEvents.test.js

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const textbox = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(textbox).toBeInTheDocument();
  });

  test('renders with default number of 32', () => {
    render(<NumberOfEvents onNumberChange={changeHandler} />);
    const input = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(input.value).toBe('32'); // Checks if the default value is set to 32
  });

  test('user interaction updates input value and triggers onNumberChange callback with new value', async () => {
    const onNumberChange = jest.fn(); // Mock the onNumberChange function
    const user = userEvent.setup();
    render(<NumberOfEvents onNumberChange={onNumberChange} defaultNumber={32} />);
    
    const input = screen.getByRole('spinbutton', { name: /number of events:/i }); 
    await user.clear(input); // Simulate user clearing the input
    await user.type(input, '10'); // Simulate user typing 10 in the input
    expect(input).toHaveValue(10); // Checks if the input value is updated to 10
    expect(onNumberChange).toHaveBeenCalledWith('10'); // Checks if the onNumberChange function is called with the new value
  });
});
