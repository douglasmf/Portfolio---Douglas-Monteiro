import { useState, useEffect } from 'react';

export function useMedia() {
  const [size, setSize] = useState('SM');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 900) {
        setSize('LG');
      } else if (window.innerWidth >= 600) {
        setSize('MD');
      } else {
        setSize('SM');
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

