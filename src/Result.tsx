type VarType = {
    name: string,
    age: number,
    isTeen: boolean
}

function Result({name, age, isTeen}: VarType) {
    return (
      <div>
        <h2>My name is {name}</h2>
        <h2>Age = {age}</h2>
        <h2>Teen = { isTeen ? "Yes":"No" }</h2>
      </div>
    );
  }
  
  export default Result;
  