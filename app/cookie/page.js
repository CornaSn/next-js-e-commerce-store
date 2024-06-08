import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const cookieValue = getCookie('AddToCart');
  console.log(cookieValue);

  return (
    <>
      <div> Cookie Value {cookieValue}</div>
      <SetCookieForm />
    </>
  );
}
