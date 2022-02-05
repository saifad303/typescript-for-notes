import Person from "./Person";
import Result from "./Result";
import PersonList from "./PersonList"

function App() {
  const person = {
    first: "Asif",
    last: "Ahmed"
  }
  const personList = [
    {
      first: "Irfan", 
      last: "pathan"
    },
    {
      first: "Wasim", 
      last: "Akram"
    },
    {
      first: "Pushpa", 
      last: "Raj"
    },
  ]
  return (
    <div>
      <Result name="Saif" age={10} isTeen={false}  />
      <hr />
      <Person singleIdentity={person} />
      <hr />
      <PersonList personList={personList} />
    </div>
  );
}

export default App;
