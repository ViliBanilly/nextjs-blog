import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar';
import '@/styles/global.css';

export default function App({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState(false);
  // check and reset theme when `darkMode` changes
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
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
