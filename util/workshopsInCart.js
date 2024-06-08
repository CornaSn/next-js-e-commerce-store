import { getWorkshops } from '../database/workshops';
import { getCookie } from './cookies';

export function WorkshopsInCart() {
  const workshops = getWorkshops();
  const workshopsQuantityCookie = getCookie('AddToCart');

  const workshopQuantity = !workshopsQuantityCookie
    ? []
    : JSON.parse(workshopsQuantityCookie) || [];

  // Check which workshops are in cookies
  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopQuantity.find(
      (workshopObject) => workshop.id === workshopObject.id,
    );
    // console.log(
    //   'matchingWithWorkshopFromCookie',
    //   matchingWithWorkshopFromCookie,
    // );
    //  ? Optional Changing
    return { ...workshop, quantity: matchingWithWorkshopFromCookie?.quantity };
  });

  // Filter only the workshops which are not undefined
  const workshopsInCart = workshopsWithQuantity.filter(
    (workshop) => workshop.quantity,
  );
  return workshopsInCart;
}
