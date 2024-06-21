import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatTime } from '../../util/dates';
import { WorkshopsInCart } from '../../util/workshopsInCart';
import styles from './Cart.module.scss';
import CheckoutButton from './CheckoutButtonForm';
import RemoveButtonForm from './RemoveButtonForm';

export const metadata = {
  title: 'Cart',
  description:
    'Review your Cornafy Yoga selections! Check your workshop and retreat choices before proceeding to a fast and secure checkout. Ready to join us?',
};

export default async function CartPage() {
  // Insert WorkshopsInCart function from util folder
  const workshopsInCart = await WorkshopsInCart();

  // Calculate the total Sum of all Workshops
  const initialValue = 0;
  const totalSum = workshopsInCart.reduce((accumulator, workshop) => {
    return accumulator + Number(workshop.price) * Number(workshop.quantity);
  }, initialValue);

  return (
    <div className={styles.containerCart}>
      <h1>Your Cart:</h1>
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
                      <div>
                        <strong>Date:</strong>{' '}
                        {formatDate(new Date(workshop.startTime))}
                      </div>
                      <div>
                        <strong>Time:</strong>{' '}
                        {formatTime(new Date(workshop.startTime))} -{' '}
                        {formatTime(new Date(workshop.endTime))}
                      </div>
                      <div data-test-id="product-price">
                        Price: €{` ${workshop.price},-`}
                      </div>
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

            <div className={styles.totalSum} data-test-id="cart-total">
              Total Sum: {`€ ${totalSum},-`}{' '}
            </div>
            <div className={styles.checkoutButtonContainer}>
              <CheckoutButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
