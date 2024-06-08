import styles from './Checkout.module.scss';
import SetCheckOutForm from './SetCheckoutForm';

export const metadata = {
  title: 'Check-Out',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function CheckOut() {
  return (
    <div className={styles.checkOutContainer}>
      <div>PLACEHOLDER FOR WORKSHOPS WHICH HAVE BEEN ADDED TO THE CART </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <SetCheckOutForm />
      </div>
    </div>
  );
}
