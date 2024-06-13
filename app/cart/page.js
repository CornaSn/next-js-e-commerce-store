import Image from 'next/image';
import Link from 'next/link';
import { getWorkshopsInsecure } from '../../database/workshops';
import { getCookie } from '../../util/cookies';
import { WorkshopsInCart } from '../../util/workshopsInCart';
import styles from './Cart.module.scss';
import RemoveButtonForm from './RemoveButtonForm';

export const metadata = {
  title: 'Cart',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default async function CartPage() {
  // Insert WorkshopsInCart function from util folder
  const workshopsInCart = await WorkshopsInCart();

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
        {workshopsInCart.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <>
            {workshopsInCart.map((workshop) => {
              // Calculate the total Price of one workshop
              const workshopTotalPrice = workshop.quantity * workshop.price;

              return (
                <div
                  key={`workshop-${workshop.id}`}
                  data-test-id={`cart-product-${workshop.id}`}
                >
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
                      <div className={styles.removeButton}>
                        <RemoveButtonForm workshopId={workshop.id} />
                      </div>
                      <h2>
                        <Link href={`/workshops/${workshop.id}`}>
                          {workshop.workshopName}{' '}
                        </Link>
                      </h2>

                      <div>Location: {workshop.location}</div>
                      <div>Date: {workshop.date}</div>
                      <div>Time: {workshop.time}</div>
                      <div>Price: {`€ ${workshop.price},-`}</div>
                      <div className={styles.totalPriceWorkshop}>
                        <div
                          data-test-id={`cart-product-quantity-${workshop.id}`}
                        >
                          {`Qty. ${workshop.quantity}`}{' '}
                        </div>
                        <div>{`€ ${workshopTotalPrice},- `} </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={styles.totalSum}>
              Total Sum: {`€ ${totalSum},-`}{' '}
            </div>
            <Link href="/checkout" className={styles.checkOutButton}>
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
