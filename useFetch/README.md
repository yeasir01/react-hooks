# Useage

## GET
```
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [response, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users');

  const users = response.map( user => (
    <div key={user.id}>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
    </div>
  ))
  
  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>
  } else {
    content = error ? <p>{error.message}</p> : users
  }
  
  return (
    <div>
      {content}
    </div>
  )
}

export default App;

```


## POST
```
import {useState} from "react";
import useFetch from "./Hooks/useFetch.js";

const initialState = {
  title: "",
  body: "",
  userId: ""
}

function App() {
  const [posts, setPosts] = useState(initialState);
  const [response, error, isLoading, request] = useFetch();

  const handleChange = event => {
    let {name, value} = event.target;
    setPosts({...posts, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const opt = {
      method: "POST",
      body: JSON.stringify(posts),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }

    request("https://jsonplaceholder.typicode.com/posts", opt);
  }
  
  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : error ? <h3>{error.message}</h3> : <h3>{JSON.stringify(response)}</h3>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={posts.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input type="textarea" rows="4" id="body" name="body" value={posts.body} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="userId">User ID</label>
          <input type="number" id="userId" name="userId" value={posts.userId} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

```
