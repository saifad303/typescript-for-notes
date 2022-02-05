type VarType = {
    name: string
}

function Result({name}: VarType) {
    return (
      <div>
        My name is {name}
      </div>
    );
  }
  
  export default Result;
  