import Image from 'next/image';
import { getWorkshop } from '../../../database/workshops';

export default function WorkshopId(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

  console.log('props', singleWorkshop);
  return (
    <div>
      <h1>{singleWorkshop.workshopName}</h1>
      <div>{singleWorkshop.location}</div>
      <div>{singleWorkshop.date}</div>
      <div>{singleWorkshop.time}</div>
      <div>{singleWorkshop.price}</div>
      <div>{singleWorkshop.description}</div>
      <div>
        <Image
          src={`/images/${singleWorkshop.image}.webp`}
          data-test-id="product-image"
          alt=""
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
