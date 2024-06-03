import { cookies } from 'next/headers';
import Image from 'next/image';
import { getWorkshop } from '../../../database/workshops';
// import RootNotFound from '../../not-found';
import AddToCartForm from './AddToCartPage';

export default function WorkshopId(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

  // //  Inserting a "not found" page
  // if (!singleWorkshop) {
  //   RootNotFound();
  // }

  const workshopsQuantityCookies = cookies().get('AddToCart');

  const workshopsQuantity = JSON.parse(workshopsQuantityCookies.value);

  const workshopQuantityToDisplay = workshopsQuantity.find(
    (workshopQuantity) => {
      return workshopQuantity.id === singleWorkshop.id;
    },
  );

  return (
    <div>
      <h1>{singleWorkshop.workshopName}</h1>

      <div>
        <div>
          <Image
            src={`/images/${singleWorkshop.image}.webp`}
            data-test-id="product-image"
            alt={singleWorkshop.workshopName}
            width={200}
            height={200}
          />
        </div>
      </div>
      <div>
        <div>{singleWorkshop.location}</div>
        <div>{singleWorkshop.date}</div>
        <div>{singleWorkshop.time}</div>
        <div>{singleWorkshop.price}</div>
        <div>{singleWorkshop.description}</div>
        <div>{singleWorkshop.workshopName}</div>
      </div>
      <br />
      <br />
      <AddToCartForm />
      <br />
      <div>WorkshopQuantityToDisplay: {workshopQuantityToDisplay.quantity}</div>
    </div>
  );
}
