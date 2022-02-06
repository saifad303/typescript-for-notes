import Button from "./Button";
import Input from "./Input";

function App() {
  return (
    <div>
      <Button handleClick={(event) => console.log("button click", event)} />
      <hr />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
