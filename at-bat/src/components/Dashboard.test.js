import React from 'react';
import DashBoard from './Dashboard';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

describe('DashBoard', () => {
    it('render without crashing', () => {
      render(<DashBoard />)
    } )
    it('strike', () => {
      const click = jest.fn()
      const {getByText} = render(<DashBoard strikeCount={click}/>);
      const strikeButton = getByText(/^strike$/i);
      fireEvent.click(strikeButton);
      expect(click).toBeCalled();
    })
    it('ball', () => {
      const click = jest.fn();
      const { getByText } = render(<DashBoard ballCount={click}/>);
      const ballButton = getByText(/^ball$/i);
      fireEvent.click(ballButton);
      expect(click).toBeCalled();
    })
    it('foul', () => {
      const click = jest.fn();
      const { getByText } = render(<DashBoard foul={click}/>);
      const foulButton = getByText(/^foul$/i);
      fireEvent.click(foulButton);
      expect(click).toBeCalled();
    })
    it('hit', () => {
      const click = jest.fn();
      const { getByText } = render(<DashBoard hit={click} />);
      const hitButton = getByText(/^hit$/i);
      fireEvent.click(hitButton);
      expect(click).toBeCalled();
    })
})
