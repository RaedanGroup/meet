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
    render(<NumberOfEvents onNumberChange={() => {}} setErrorAlert={() => { }}/>);
    const textbox = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(textbox).toBeInTheDocument();
  });

  test('renders with default number of 32', () => {
    render(<NumberOfEvents onNumberChange={changeHandler} setErrorAlert={() => { }}/>);
    const input = screen.getByRole('spinbutton', { name: /number of events:/i });
    expect(input.value).toBe('32'); // Checks if the default value is set to 32
  });

  test('user interaction updates input value and triggers onNumberChange callback with new value', async () => {
    const onNumberChange = jest.fn(); // Mock the onNumberChange function
    const user = userEvent.setup();
    render(<NumberOfEvents onNumberChange={onNumberChange} defaultNumber={32} setErrorAlert={() => { }}/>);
    
    const input = screen.getByRole('spinbutton', { name: /number of events:/i });
    // Simulate user typing in the input
    await user.type(input, '{backspace}');
    expect(input).toHaveValue(3); // Checks if the input value is updated to 3
    expect(onNumberChange).toHaveBeenCalledWith('3'); // Checks if the onNumberChange function is called with the new value
  });
});
