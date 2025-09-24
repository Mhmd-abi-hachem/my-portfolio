import React, { useState, useEffect } from "react";

function CustomCursor({ isHovering }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isMobile =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (!isHovering || isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? "active" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <span className="rotate-45 text-6xl text-[#e5e7df]">&uarr;</span>
    </div>
  );
}

export default CustomCursor;
