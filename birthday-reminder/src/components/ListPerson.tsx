import { Person } from '../data/people';

interface ListPersonProps {
  person: Person;
}

const ListPersonProps: React.FC<ListPersonProps> = ({ person }) => {
  return (
    <article className="person">
      <img data-testid="person-image" src={person.image} alt={person.name} />
      <div>
        <h4 data-testid="person-name">{person.name}</h4>
        <p data-testid="person-age">{person.age}</p>
      </div>
    </article>
  );
};

export default ListPersonProps;
