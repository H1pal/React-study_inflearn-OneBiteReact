/* 배경 꾸미고 싶어서 만든 파일 (사용X) */

import { useRef } from "react";

function InteractiveBg() {
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    bgRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
    bgRef.current.style.setProperty("--mouse-y", `${e.clinetY}px`);
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ minHeight: "100vh" }}>
      <div
        ref={bgRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0f172a",
          backgroundImage: `radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(99, 102, 241, 0.15),
            transparent 80%
          )`,
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default InteractiveBg;
