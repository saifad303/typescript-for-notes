import Result from "./Result";
import Headings from "./Headings";
import Oscar from "./Oscar";

function App() {
  return (
    <div>
      <Result status="success" />
      <hr />
      <Headings>Children of headings.</Headings>
      <hr />
      <Oscar>
        <Headings>Oscar goes to decaprio</Headings>
      </Oscar>
    </div>
  );
}

export default App;
