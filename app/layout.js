import './globals.scss';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../database/workshops';
import Logo from '../public/images/logo.webp';
import { createCookie } from './cookie/actions';
import SetCookieForm from './cookie/SetCookieForm';
import styles from './Layout.module.scss';

export const metadata = {
  title: { default: 'Home | Cornafy Yoga', template: '%s | Cornafy Yoga' },
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};
const workshops = getWorkshops();

export default function RootLayout({ children }) {
  const workshopsQuantityCookie = cookies().get('AddToCart');
  console.log('workshopsQuantityCookies1', workshopsQuantityCookie);

  const workshopQuantity = !workshopsQuantityCookie
    ? // Case A - Cookie is undefined
      []
    : JSON.parse(workshopsQuantityCookie.value) || []; // Empty Array in case the JSON.parse is defect or has an error
  console.log('workshopsQuantity2', workshopQuantity);

  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopQuantity.find(
      (workshopObject) => workshop.id === workshopObject.id,
    );
    console.log(
      'matchingWithWorkshopFromCookie3',
      matchingWithWorkshopFromCookie,
    );

    let value = 0;
    if (typeof matchingWithWorkshopFromCookie === 'undefined') {
      value = 0;
    } else {
      value = matchingWithWorkshopFromCookie.quantity;
    }
    // ? Optional Chaining if matchingWithWorkshopFromCookie === undefined, return undefined, else return qunatity
    return {
      ...workshop,
      quantity: Number(value),
    };
  });

  function SumCart(cookieWorkshopObject) {
    const totalCart = cookieWorkshopObject.reduce(function (quantity, sum) {
      return {
        quantity: quantity.quantity + sum.quantity,
      };
    });
    return totalCart.quantity;
  }

  console.log(SumCart(workshopsWithQuantity));

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
                <Link href="/">Home</Link>
                <Link href="/about">About us</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/cart">Cart: {SumCart(workshopsWithQuantity)}</Link>
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
