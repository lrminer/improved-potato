import React, { useState } from "react";

const TextEditor = props => {
  // HOOKS
  const [text, setText] = useState("");
  // HOOKS (Above)

  // Functions

  // Functions

  return (
    <>
      <input value={text} onChange={event => setText(event.target.value)} />
      <button onClick={() => console.log(text)}>click</button>
    </>
  );
};

export default TextEditor;
