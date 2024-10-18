import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  siteTitle?: string;
  home?: boolean;
};

export default function Layout({ children, siteTitle = 'Chinchilla - Blog', home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer style={{ textAlign: 'right', color: 'gray' }}>
        <small>© {`${new Date().getFullYear()}`}</small>
      </footer>
    </div>
  );
}
