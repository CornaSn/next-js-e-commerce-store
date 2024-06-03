'use server';

import { cookies } from 'next/headers.js';

export async function addQuantityToCart(quantity) {
  await cookies().set(
    'AddToCart',
    JSON.stringify([
      { id: 1, quantity: quantity },
      { id: 2, quantity: quantity },
    ]),
  );
}
