'use server';

import { cookies } from 'next/headers.js';
import { getCookie } from '../../../util/cookies';

// import { parseJson } from '../../../util/json.js';

// Case A - Cookie is undefined
// Case B - Cookie exists, we need to add a new comment
// Case C - Cookie exists  with a comment for a specific workshop ID.

export type WorkshopQuantity = {
  id: number;
  quantity: string;
};

export async function addQuantityToCart(
  singleWorkshopId: number,
  quantity: string,
) {
  // 1. Get current cookie
  const workshopsQuantityCookie = getCookie('Cart');

  // 2. Parse the cookie value
  const workshopQuantities = !workshopsQuantityCookie
    ? // Case A - Cookie is undefined
      []
    : JSON.parse(workshopsQuantityCookie) || [];
  // : parseJson(workshopsQuantityCookie) || []; // Empty Array in case the JSON.parse is defect or has an error

  // 3. Edit the cookie value | Search inside Cookie if there is an ID matching the Cookie ID
  const workshopToUpdate = workshopQuantities.find(
    (workshopQuantity: WorkshopQuantity) => {
      return workshopQuantity.id === singleWorkshopId;
    },
  );

  // Case B - Cookie exists, we need to add a new comment
  if (!workshopToUpdate) {
    workshopQuantities.push({ id: singleWorkshopId, quantity: quantity });
  } else {
    // Case C - Cookie exists  with a comment for a specific workshop ID.
    workshopToUpdate.quantity = quantity;
  }
  // 4. We override the cookie
  await cookies().set('Cart', JSON.stringify(workshopQuantities));
}
