import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import people from './data/people';

describe('App component', () => {
  it('should render correctly', () => {
    render(<App />);

    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });

  it("should render title with today's birthday quantity", () => {
    render(<App />);

    const birthdayQuantityEl = screen.getByText(/birthdays today/i);

    expect(birthdayQuantityEl).toBeInTheDocument();
    expect(birthdayQuantityEl.innerHTML).toMatch(String(people.length));
  });

  it('should render a list with all people', () => {
    render(<App />);

    const peopleEls = screen.getAllByRole('article');

    expect(peopleEls).toHaveLength(people.length);
  });

  it('should clear list items when clear button is clicked', () => {
    render(<App />);

    const clearButton = screen.getByText(/Clear all/i) as HTMLButtonElement;

    fireEvent.click(clearButton);

    const peopleEls = screen.queryAllByRole('article');
    const birthdayQuantityEl = screen.getByText(/birthdays today/i);

    expect(peopleEls).toHaveLength(0);
    expect(birthdayQuantityEl.innerHTML).toMatch('0');
  });
});
