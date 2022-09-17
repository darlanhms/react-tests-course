import { render, screen } from '@testing-library/react';
import people from '../data/people';
import ListPerson from './ListPerson';

describe('List person component', () => {
  it('should render list person with right data', () => {
    const person = people[0];

    render(<ListPerson person={person} />);

    const personImageEl = screen.getByTestId('person-image') as HTMLImageElement;
    const personNameEl = screen.getByTestId('person-name');
    const personAgeEl = screen.getByTestId('person-age');

    expect(personImageEl.src).toBe(person.image);
    expect(personImageEl.alt).toBe(person.name);
    expect(personNameEl.innerHTML).toBe(person.name);
    expect(personAgeEl.innerHTML).toBe(String(person.age));
  });
});
