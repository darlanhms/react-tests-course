import { Person } from '../data/people';

interface ListProps {
  people: Array<Person>;
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <>
      {people.map(person => (
        <article key={`person_${person.id}`} className="person">
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
