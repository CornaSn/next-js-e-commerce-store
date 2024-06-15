import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IoCart, IoHome } from 'react-icons/io5';
import { getWorkshopsInsecure } from '../database/workshops';
import Logo from '../public/images/logo.webp';
import { getCookie } from '../util/cookies.js';
import { parseJson } from '../util/json.js';
import styles from './Layout.module.scss';

export const metadata = {
  title: { default: 'Home | Cornafy Yoga', template: '%s | Cornafy Yoga' },
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default async function RootLayout({ children }) {
  const workshops = await getWorkshopsInsecure();
  const workshopsQuantityCookie = getCookie('Cart');

  const workshopQuantity = !workshopsQuantityCookie
    ? // Case A - Cookie is undefined
      []
    : parseJson(workshopsQuantityCookie) || []; // Empty Array in case the JSON.parse is defect or has an error

  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopQuantity.find(
      (workshopObject) => workshop.id === workshopObject.id,
    );

    let value = 0;
    if (typeof matchingWithWorkshopFromCookie === 'undefined') {
      value = 0;
    } else {
      value = matchingWithWorkshopFromCookie.quantity;
    }
    return {
      ...workshop,
      quantity: Number(value),
    };
  });

  // Add all workshops in cookie together
  async function SumCart(cookieWorkshopObject) {
    // Check if the array is empty
    if (cookieWorkshopObject.length === 0) {
      return 0;
    }
    // Define the initial value for the reduce method
    const initialValue = { quantity: 0 };

    // Perform the reduce operation with the initial value
    const totalCart = await cookieWorkshopObject.reduce(function (
      quantity,
      sum,
    ) {
      return {
        quantity: quantity.quantity + sum.quantity,
      };
    }, initialValue);
    return totalCart.quantity;
  }

  return (
    <html lang="en">
      <body /*className={`${geistSans.variable} ${geistMono.variable}`}*/>
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
                <Link href="/">
                  <IoHome className={styles.badge} />
                </Link>
                <Link href="/about">About us</Link>
                <Link href="/workshops">Workshops</Link>
                {/* <Link href="/contact">Contact</Link> */}
                <Link href="/cart" data-test-id="cart-link">
                  <IoCart className={styles.badge} />
                </Link>
                <li className={styles.badgeNumber} data-test-id="cart-count">
                  {SumCart(workshopsWithQuantity)}
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
        {/* <footer className={styles.footer}>
          Created by &copy; Cornafy Yoga
        </footer> */}
      </body>
    </html>
  );
}
