import React, { useEffect, useRef, useState } from 'react';
const CustomCursor = ({ containerRef }) => {
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        mousePos.current = { x: e.clientX + 50, y: e.clientY - 20 }; // offset
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const animate = () => {
      // ✅ Slower motion by using 0.03
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    animate();

    return () => window.removeEventListener('mousemove', move);
  }, [containerRef]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform"
    >
      <div className="px-2 py-1 bg-white rounded-full mix-blend-difference text-sm">
        Portfolio
      </div>
    </div>
  );
};

export default CustomCursor;
