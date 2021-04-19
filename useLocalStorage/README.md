# Useage

### WITH FORM
```
import useLocalStorage from "./Hooks/useLocalStorage.js";

const initialState = {
  title: "",
  body: "",
  userId: ""
}

function App() {
  const [state, setState] = useLocalStorage("MY_FORM", initialState);

  const handleChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={state.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input type="textarea" rows="4" id="body" name="body" value={state.body} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="userId">User ID</label>
          <input type="number" id="userId" name="userId" value={state.userId} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

```
