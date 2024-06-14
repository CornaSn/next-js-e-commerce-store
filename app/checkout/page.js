import Link from 'next/link';
import { formatDate } from '../../util/dates';
import { WorkshopsInCart } from '../../util/workshopsInCart';
import styles from './Checkout.module.scss';
import SetCheckOutForm from './SetCheckoutForm';

export const metadata = {
  title: 'Check-Out',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default async function CheckOut() {
  // Insert WorkshopsInCart function from util folder
  const workshopsInCart = await WorkshopsInCart();

  // Calculate the total Sum of all Workshops
  const initialValue = 0;
  const totalSum = workshopsInCart.reduce(
    (accumulator, workshop) =>
      (accumulator + Number(workshop.price)) * Number(workshop.quantity),
    initialValue,
  );

  return (
    <div className={styles.checkOutContainer}>
      <div className={styles.checkOutForm}>
        <SetCheckOutForm />
      </div>
      <div className={styles.containerCart}>
        <h1>Your Order:</h1>
        <div>
          {workshopsInCart.map((workshop) => {
            // Calculate the total Price of one workshop
            return (
              <div key={`workshop-${workshop.id}`}>
                <div>
                  <div className={styles.overviewCheckout}>
                    <h2>
                      {workshop.quantity}x {workshop.workshopName}
                    </h2>
                    <div>Location: {workshop.location}</div>
                    <div>Date: {formatDate(new Date(workshop.startTime))}</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className={styles.totalSum}>Total Sum: {`€ ${totalSum},-`} </div>
        </div>
      </div>
    </div>
  );
}
