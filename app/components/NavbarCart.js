import Link from 'next/link';
import { IoCart } from 'react-icons/io5';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './NavbarCart.module.scss';

export default async function NavbarCart() {
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
    <Link href="/cart" data-test-id="cart-link" className={styles.badge}>
      <IoCart />
      <li data-test-id="cart-count" className={styles.badgeNumber}>
        {SumCart(workshopsWithQuantity)}
      </li>
    </Link>
  );
}
