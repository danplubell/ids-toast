import { useState } from "react";
import "./App.css";
import { ToasterViewPort } from "./components/Toast/Toast/ToasterViewPort.tsx";
import {Toaster} from "./components/Toast/Toast/Toaster.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster count={count}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
