import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

export const metadata = {
  title: 'Thank You',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function ThankYou() {
  const workshopsQuantityCookies = getCookie('AddtoCart');

  async function clearCookies(workshopsQuantityCookies) {
    cookies().delete('AddToCart');
  }

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <div>
        Your order has been received and a confirmation has been sent to your
        e-mail.
      </div>
      <h2>Looking forward on seeing you at the workshop!</h2>
    </div>
  );
}
