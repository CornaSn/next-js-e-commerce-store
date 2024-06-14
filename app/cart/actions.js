'use server';
import { cookies } from 'next/headers.js';
import { getCookie } from '../../util/cookies.js';

export async function removeWorkshop(workshopId) {
  // Get current Workshops in cookie
  const workshopsQuantityCookie = getCookie('AddToCart');

  const workshopQuantity = !workshopsQuantityCookie
    ? []
    : JSON.parse(workshopsQuantityCookie) || [];

  const workshopLeftAfterRemoving = workshopQuantity.filter(
    (idOfRemovedWorkshop) => {
      return idOfRemovedWorkshop.id !== workshopId;
    },
  );

  await cookies().set('AddToCart', JSON.stringify(workshopLeftAfterRemoving));
}
