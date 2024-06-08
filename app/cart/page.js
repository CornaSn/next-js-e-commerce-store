import { getWorkshops } from '../../database/workshops';
import { getCookie } from '../../util/cookies';

// import styles from './Cart.module.scss';

export const metadata = {
  title: 'Cart',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function CartPage() {
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
  // console.log('Workshops in Cart with Quantity:', workshopsInCart);

  const initialValue = 0;
  const totalSum = workshopsInCart.reduce(
    (accumulator, workshop) =>
      (accumulator + workshop.price) * workshop.quantity,
    initialValue,
  );
  // console.log('totalSum:', totalSum);

  return (
    <div>
      <h1>Cart</h1>
      {workshopsInCart.map((workshop) => {
        const workshopTotalPrice = workshop.quantity * workshop.price;

        return (
          <div key={`workshop-${workshop.id}`}>
            <h2>{workshop.workshopName}</h2>
            <div>{workshop.location}</div>
            <div>{workshop.date}</div>
            <div>{workshop.time}</div>
            <div>{`€ ${workshop.price},-`}</div>
            <div>{workshop.quantity}</div>
            <div>{`€ ${workshopTotalPrice},- `}</div>
          </div>
        );
      })}
      <div>Total Sum:{`€ ${totalSum},-`} </div>
    </div>
  );
}
