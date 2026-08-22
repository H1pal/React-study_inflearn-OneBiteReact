import { useState, useEffect } from "react";
import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";
import { useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(1);
  const [input, setInput] = useState("");

  function onChangeSize(changedSize) {
    setSize(changedSize);
  }

  function handleOnClick() {
    setCount(count + size);
  }

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  useEffect(() => {
    console.log(`${count}!! ${input};;`);
  }, [count, input]); // deps array

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "radial-gradient(circle at 0% 36%, black, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.93)",
          position: "fixed",
          zIndex: "-9999",
        }}
      >
        <div id="interactive-bg"></div>
        <Header />
        <main
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "800px",
            borderRadius: "10px",
            padding: "20px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="text" onChange={handleOnChange} />
          <Viewer count={count} handleOnClick={handleOnClick} />
          {count % 2 === 0 ? <Even /> : null}
          <Controller focusedNumber={size} onChange={onChangeSize} />
        </main>
      </div>
    </div>
  );
}

export default App;
