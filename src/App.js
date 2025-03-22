import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <button className="glass-button" onClick={() => setMessage("Hey!")}>
        Click Me
      </button>
      {message && <h2 className="message">{message}</h2>}
    </div>
  );
}

export default App;
