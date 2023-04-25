import React, { useState } from "react";

function Square(props) {
  const [color, setColor] = useState(props.color);

  function handleClick() {
    setColor(color === "red" ? "blue" : "red");
  }

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        display: "inline-block",
        margin: "10px"
      }}
      onClick={handleClick}
    ></div>
  );
}

function App() {
  return (
    <div>
      <Square color="red" />
      <Square color="blue" />
    </div>
  );
}

export default App;
