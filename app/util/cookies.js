// const workshopsQuantityCookies = cookies().get('AddToCart')?.value;

import { cookies } from 'next/headers.js';

export function getCookie(name) {
  const cookie = cookies().get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
