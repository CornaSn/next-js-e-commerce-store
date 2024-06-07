import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const cookieValue = cookies().get('AddToCart');
  console.log(cookieValue);

  return (
    <>
      <div> Cookie Value {cookieValue.value}</div>
      <SetCookieForm />
    </>
  );
}
