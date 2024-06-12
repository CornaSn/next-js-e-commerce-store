import { getWorkshops } from '../database/workshops';
import { parseJson } from '../util/json.js';
import { getCookie } from './cookies';

export async function WorkshopsInCart() {
  const workshops = await getWorkshops();
  const workshopsQuantityCookie = getCookie('AddToCart');

  const workshopQuantity = !workshopsQuantityCookie
    ? []
    : parseJson(workshopsQuantityCookie) || []; // Empty Array in case the JSON.parse is defect or has an error

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
