import Image from 'next/image';
import Logo from '../../../public/images/logo.webp';
import styles from './ThankYou.module.scss';

export const metadata = {
  title: 'Thank You',
  description:
    'Thank you for joining Cornafy Yoga! Your registration is confirmed. Get ready to embark on a unique yoga journey with our workshops and retreats.',
};

export default function ThankYou() {
  return (
    <div className={styles.container}>
      <h1>Thank you for your order</h1>
      <p>
        Your order has been received and a confirmation has been sent to your
        e-mail.
      </p>
      <p>Looking forward on seeing you at the workshop!</p>
      <Image
        src={Logo}
        alt="Cornafy Yoga "
        width={200}
        height={200}
        className={styles.logo}
      />
    </div>
  );
}
