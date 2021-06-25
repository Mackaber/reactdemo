import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Hola!");
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {isCopied && <h1>Copied</h1>}
    </div>
  );
}
