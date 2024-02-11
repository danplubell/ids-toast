import {  useState } from "react";
import "./App.css";
import { useToaster } from "./components/Toast/Toast/useToaster.tsx";

function App() {
  const [count, setCount] = useState(0);
  const { toast, toaster } = useToaster();

  return (
    <>
      {toaster}
      <div className="card">
        <button
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            toast(newCount.toString());
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
