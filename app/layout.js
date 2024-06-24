import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import Logo from '../public/images/logo.webp';
import NavbarCart from './components/NavbarCart';
import styles from './Layout.module.scss';

export const metadata = {
  title: { default: 'Home | Cornafy Yoga', template: '%s | Cornafy Yoga' },
  description:
    'Discover Cornafy Yoga`s seamless and intuitive layout! Navigate through our diverse offerings, from unique workshops to retreats, with ease. Find your perfect yoga experience today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.navigation}>
            <nav>
              <ul>
                <li>
                  <Image
                    src={Logo}
                    alt="Cornafy Yoga "
                    width={150}
                    height={150}
                  />
                </li>
                <li>
                  <Link href="/">
                    <IoHome className={styles.badge} />
                  </Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/workshops">Workshops</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <NavbarCart data-test-id="products-link" />
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* <footer className={styles.footer}>
          Created by &copy; Cornafy Yoga
        </footer> */}
      </body>
    </html>
  );
}
