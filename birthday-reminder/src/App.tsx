import { useState } from 'react';
import List from './components/List';
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
        <List people={people} />
        <button onClick={handleClear}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
