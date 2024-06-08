'use server';

import { cookies } from 'next/headers.js';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json.js';

// Case A - Cookie is undefined
// Case B - Cookie exists, we need to add a new comment
// Case C - Cookie exists  with a comment for a specific workshop ID.

export async function addQuantityToCart(singleWorkshopId, quantity) {
  // 1. Get current cookie
  const workshopsQuantityCookie = getCookie('AddToCart');

  // 2. Parse the cookie value
  const workshopQuantity = !workshopsQuantityCookie
    ? // Case A - Cookie is undefined
      []
    : parseJson(workshopsQuantityCookie) || []; // Empty Array in case the JSON.parse is defect or has an error
  console.log(workshopQuantity);

  // 3. Edit the cookie value | Search inside Cookie if there is an ID matching the Cookie ID
  const workshopToUpdate = workshopQuantity.find((workshopQuantity) => {
    return workshopQuantity.id === singleWorkshopId;
  });
  console.log('was ist da', workshopToUpdate);

  // Case B - Cookie exists, we need to add a new comment
  if (!workshopToUpdate) {
    workshopQuantity.push({ id: singleWorkshopId, quantity: quantity });
  } else {
    // Case C - Cookie exists  with a comment for a specific workshop ID.
    workshopToUpdate.quantity = quantity;
  }
  // 4. We override the cookie

  console.log('workshopToUpdate2', workshopToUpdate);

  await cookies().set('AddToCart', JSON.stringify(workshopQuantity));
}
