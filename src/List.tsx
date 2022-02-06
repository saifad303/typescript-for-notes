interface PProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export default function List({ people }: PProps) {
  return (
    <div>
      <ul>
        {people.map((ppl, index) => {
          return (
            <div key={index}>
              <li>{ppl.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
