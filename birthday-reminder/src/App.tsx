import { useState } from 'react';
import ListPerson from './components/ListPerson';
import peopleData from './data/people';

function App(): React.ReactElement {
  const [people, setPeople] = useState(peopleData);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map(person => (
          <ListPerson key={`person_${person.id}`} person={person} />
        ))}
        <button onClick={handleClear}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
