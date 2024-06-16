'use client';

import { useRouter } from 'next/navigation';
import styles from './CheckoutButton.module.scss';

export default function CheckoutButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/checkout');
  };

  return (
    <button
      onClick={handleClick}
      data-test-id="cart-checkout"
      className={styles.checkoutButton}
    >
      Checkout
    </button>
  );
}
