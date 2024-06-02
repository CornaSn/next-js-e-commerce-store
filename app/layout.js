import './globals.scss';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.webp';
import styles from './Layout.module.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: { default: 'Home | Cornafy Yoga', template: '%s | Cornafy Yoga' },
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} />
      <body>
        <header className={styles.header}>
          <div className={styles.navigation}>
            <nav>
              <ul>
                <Image
                  src={Logo}
                  alt="Cornafy Yoga "
                  width={150}
                  height={150}
                />
                <Link href="/">Home</Link>
                <Link href="/about">About us</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/contact">Contact</Link>
                <li>Cart: {Math.floor(Math.random() * 10)}</li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className={styles.footer}>Here comes the footer</footer>
      </body>
    </html>
  );
}
