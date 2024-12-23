import { useState } from "react";
import "./App.css";

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  const onAddName = () => {
   if (!name.trim()) {
    alert("Enter a name")
    return;
   }
   setList([...list, name])
   setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName} >Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}> Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
