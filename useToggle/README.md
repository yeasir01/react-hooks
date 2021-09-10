# Useage

### TOGGLE THROUGH 2 PREDEFINED H1 TAGS
```
import useToggle from "./Hooks/useToggle.js";

function App() {
  const [toggle, setToggle] = useToggle(true);

  return (
    <div>
      {toggle ? <h1>Now You See Me</h1> : <h1>Now You Don't</h1>}
      <button onClick={setToggle}>Toggle</button>
    </div>
  )
}

export default App;

```
