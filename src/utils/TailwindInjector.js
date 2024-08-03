import { useEffect } from 'react';

const TailwindInjector = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    document.head.appendChild(link);

    // Cleanup the link element on component unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default TailwindInjector;
