import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar';
import '@/styles/global.css';

export default function App({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('theme', 'light');
    themeCheck();
  }, []);

  const themeCheck = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark-mode');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark-mode');
      setDarkMode(false);
    }
  };
  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />;
    </>
  );
}
