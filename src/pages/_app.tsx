import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar';
import '@/styles/global.css';
import { Afacad } from '@next/font/google';

const afacad = Afacad({
  subsets: ['latin']
});

export default function App({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
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
    <div className={afacad.className}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />;
    </div>
  );
}
