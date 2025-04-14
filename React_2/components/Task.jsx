import React, { useState } from "react";

function Task(props) {
  const [isCrossedOut, setIsCrossedOut] = useState(false);
  function strike() {
    setIsCrossedOut((prevalue) => {
      return !prevalue;
    });
  }
  return (
    <div
      onClick={strike}
      style={{ textDecoration: isCrossedOut ? "line-through" : null }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Task;
