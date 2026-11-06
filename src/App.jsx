import { useEffect } from 'react';
import Home from './pages/Home';
import { usePortfolio } from './hooks/usePortfolio';

export default function App() {
  const data = usePortfolio();

  useEffect(() => {
    const handler = (event) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handler, { passive: true });
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <>
      <div className="ambient-grid" />
      <div className="cursor-orb" />
      <Home data={data} />
    </>
  );
}
