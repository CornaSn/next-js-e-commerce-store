'use server';
import { cookies } from 'next/headers.js';
import { getCookie } from '../../util/cookies.js';

export async function removeWorkshop(workshopId) {
  // Get current Workshops in cookie
  const workshopsQuantityCookie = getCookie('AddToCart');

  // console.log('workshopsQuantityCookie - remove', workshopsQuantityCookie);
  // [{"id":1,"quantity":"2"},{"id":2,"quantity":"1"}]
  const workshopQuantity = !workshopsQuantityCookie
    ? []
    : JSON.parse(workshopsQuantityCookie) || [];

  // console.log(typeof workshopQuantity);
  // console.log('workshopQuantity', workshopQuantity);
  // workshopQuantity [ { id: 1, quantity: '2' }, { id: 2, quantity: '1' } ]
  // console.log(typeof workshopsQuantityCookie);

  const workshopLeftAfterRemoving = workshopQuantity.filter(
    (idOfRemovedWorkshop) => {
      return idOfRemovedWorkshop.id !== workshopId;
    },
  );

  console.log('workshopToRemove - remove button', workshopLeftAfterRemoving);
  // workshopToRemove - remove button [ { id: 2, quantity: '1' } ]

  await cookies().set('AddToCart', JSON.stringify(workshopLeftAfterRemoving));
}
