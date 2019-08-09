import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('One test', () => {
    const { getByText } = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    fireEvent.click(strike);
    fireEvent.click(strike);
    getByText(/^strikes: 2$/i);

    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/^balls: 0$/i);

    fireEvent.click(foul);
    fireEvent.click(foul);
    fireEvent.click(foul);
    getByText(/^strikes: 2$/i);

    fireEvent.click(hit);
    getByText(/^strikes: 0$/i);
    getByText(/^balls: 0$/i);
  })
})
