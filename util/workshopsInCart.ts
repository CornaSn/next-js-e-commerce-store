import { WorkshopQuantity } from '../app/workshops/[workshopId]/actions';
import { getWorkshopsInsecure } from '../database/workshops';
import { getCookie } from './cookies';
import { parseJson } from './json';

export async function WorkshopsInCart() {
  const workshops = await getWorkshopsInsecure();
  const workshopsQuantityCookie = getCookie('Cart');

  const workshopQuantity = !workshopsQuantityCookie
    ? []
    : parseJson(workshopsQuantityCookie) || []; // Empty Array in case the JSON.parse is defect or has an error

  // Check which workshops are in cookies
  const workshopsWithQuantity = workshops.map((workshop) => {
    const matchingWithWorkshopFromCookie = workshopQuantity.find(
      (workshopObject: WorkshopQuantity) => workshop.id === workshopObject.id,
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
