import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { WorkshopsInCart } from '../../util/workshopsInCart';
import styles from './Cart.module.scss';

export const metadata = {
  title: 'Cart',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function CartPage() {
  // Insert WorkshopsInCart function from util folder
  const workshopsInCart = WorkshopsInCart();

  // Calculate the total Sum of all Workshops
  const initialValue = 0;
  const totalSum = workshopsInCart.reduce(
    (accumulator, workshop) =>
      (accumulator + workshop.price) * workshop.quantity,
    initialValue,
  );
  // console.log('totalSum:', totalSum);

  return (
    <div className={styles.containerCart}>
      <h1>Cart</h1>
      <div className={styles.containerCartWorkshops}>
        {workshopsInCart.map((workshop) => {
          // Calculate the total Price of one workshop
          const workshopTotalPrice = workshop.quantity * workshop.price;

          return (
            <div key={`workshop-${workshop.id}`}>
              <div className={styles.containerSingleWorkshop}>
                <div className={styles.contentImage}>
                  <Image
                    src={`/images/${workshop.image}.webp`}
                    data-test-id="product-image"
                    alt={workshop.workshopName}
                    width={200}
                    height={300}
                  />
                </div>
                <div className={styles.cartText}>
                  <h2>{workshop.workshopName}</h2>
                  <div>Location: {workshop.location}</div>
                  <div>Date: {workshop.date}</div>
                  <div>Time: {workshop.time}</div>
                  <div>Price: {`€ ${workshop.price},-`}</div>
                  <div className={styles.totalPriceWorkshop}>
                    <div> {`Qty. ${workshop.quantity}`} </div>
                    <div>{`€ ${workshopTotalPrice},- `} </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.totalSum}>Total Sum: {`€ ${totalSum},-`} </div>
        <Link href="/checkout" className={styles.checkOutButton}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
