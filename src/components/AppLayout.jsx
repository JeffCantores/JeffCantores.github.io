import { useState } from "react";

export function AppLayout({ children }) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Off-screen initially

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-slate-950 selection:bg-sky-500 selection:text-white font-sans antialiased"
    >
      {/* 1. Global Fixed Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 60%)`,
        }}
      />

      {/* 2. Optional Global Blueprint Grid Pattern */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30"/>

      {/* 3. Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
}