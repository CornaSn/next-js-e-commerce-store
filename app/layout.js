import './globals.scss';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../database/workshops';
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
const workshops = getWorkshops();

export default function RootLayout({ children }) {
  const workshopsQuantityCookies = cookies().get('AddToCart');
  // console.log('workshopsQuantityCookies', workshopsQuantityCookies);

  const workshopsQuantity = JSON.parse(workshopsQuantityCookies.value);
  // console.log('workshopsQuantity', workshopsQuantity);

  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopsQuantity.find(
      (workshopObject) => workshop.id === workshopObject.id,
    );
    // console.log(
    //   'matchingWithWorkshopFromCookie after map & find',
    //   matchingWithWorkshopFromCookie,
    // );

    // ? Optional Chaining if matchingWithWorkshopFromCookie === undefined, return undefined, else return qunatity
    return { ...workshop, quantity: matchingWithWorkshopFromCookie?.quantity };
  });
  // console.log('workshopsWithQuantity', workshopsWithQuantity.quantity);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
                <li>
                  {/* TO DO --- Fix code, right now all 4 workshops are displayed */}
                  {workshopsWithQuantity.map((workshop) => {
                    return (
                      <div key={`workshop-${workshop.id}`}>
                        <Link href="/cart">Cart: {workshop.quantity}</Link>
                      </div>
                    );
                  })}
                </li>
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
        <footer className={styles.footer}>
          Created by &copy; Cornafy Yoga
        </footer>
      </body>
    </html>
  );
}
