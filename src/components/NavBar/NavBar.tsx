import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Sun from './icons/Sun';
import Moon from './icons/Moon';
import styles from './navbar.module.scss';
import { useEffect } from 'react';

export type NavBarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function NavBar({ darkMode, setDarkMode }: NavBarProps) {

  useEffect(() => {
    console.log('hola');
  }, []);

  const pathname = usePathname()
  console.log("🚀 ~ NavBar ~ pathname:", pathname)
  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
        <button onClick={toggleTheme} className={styles.icon}>
          {darkMode ? <Moon className={styles.iconDark} /> : <Sun className={styles.iconLight} />}
        </button>
        <Link href="/">
          <Image
            priority
            className={styles.logo}
            src={`/images/chinchilla-logo${darkMode ? '-dark' : ''}.png`}
            height={250}
            width={201}
            alt="Chinchilla - Teatro"
          />
        </Link>
        <ul className={styles.menu}>
          <Link className={`link ${pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
          <Link className={`link ${pathname === '/about' ? styles.active : ''}`} href="/about">About</Link>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
