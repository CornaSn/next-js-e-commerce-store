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

const workshops = [
  {
    //   id: 1,
    //   workshopName: 'Workshop 1',
    //   location: 'Location 1',
    //   date: '01.01.2025',
    //   time: '2pm - 7pm',
    //   price: '95,-',
    //   image: 'childPose',
    //   description: '',
    // },
    // {
    //   id: 2,
    //   workshopName: 'Workshop 2',
    //   location: 'Location 2',
    //   date: '02.02.2025',
    //   time: '8am - 5pm',
    //   price: '145,-',
    //   image: 'mountainPose',
    //   description: '',
    // },
    // {
    //   id: 3,
    //   workshopName: 'Workshop 3',
    //   location: 'Location 3',
    //   date: '03.03.2025',
    //   time: '8am - 12pm',
    //   price: '45,-',
    //   image: 'vegetables',
    //   description: '',
    // },
    // {
    //   id: 4,
    //   workshopName: 'Workshop 4',
    //   location: 'Location 4',
    //   date: '04.04.2025',
    //   time: '1pm - 8pm',
    //   price: '75,-',
    //   image: 'meditationLake',
    //   description: '',
  },
];

export default function RootLayout({ children }) {
  const workshopsQuantityCookies = cookies().get('AddToCart');
  const workshopsQuantity = JSON.parse(workshopsQuantityCookies.value);

  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopsQuantity.find(
      (workshopObject) => workshop.id === workshopObject.id,
    );
    // ? Optional Chaining if matchingWithWorkshopFromCookie === undefined, return undefined, else return qunatity
    return { ...workshop, quantity: matchingWithWorkshopFromCookie?.quantity };
  });
  console.log(workshopsWithQuantity);
  console.log('workshops.quantity', workshops.quantity);

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
                <li>Cart: {workshops.quantity}</li>
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
