# Useage

### SET/CHANGE DEFAULT PAGE TITLE
```
import {useState} from 'react';
import useTitle from "./Hooks/useTitle.js";

function App() {
  const [setTitle] = useTitle('My Site - Page 1')
  const [state, setState] = useState("My Site - Page 2");

  const handleChange = (event) => {
    setState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(state);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={state} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

```
