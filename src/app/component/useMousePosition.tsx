// useMousePosition.js
import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;
