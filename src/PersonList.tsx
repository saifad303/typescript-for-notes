type personListProps = {
    personList: {
        first: string,
        last: string
    }[]
}

export default function PersonList ({personList}: personListProps) {
  return (
    <div>
        <ul>
            {
                personList.map((person, index) => (
                    <li key={index}>
                        <p>{person.first} {person.last}</p>
                    </li>
                ))
            }
            
        </ul>
    </div>
  );
}
