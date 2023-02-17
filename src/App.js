import React, { useState } from "react";
import Calendar from "./Calendar";
import "./app.css";

function App() {
  const [date, setDate] = useState(new Date());

  const dateHandler = (e) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div className="App">
      <Calendar date={date} />
      <input type={"date"} onChange={(e) => dateHandler(e)}></input>
    </div>
  );
}

export default App;
