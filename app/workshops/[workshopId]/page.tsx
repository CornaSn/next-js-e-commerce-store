import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWorkshopInsecure } from '../../../database/workshops';
import { getCookie } from '../../../util/cookies.js';
import { formatDate, formatTime } from '../../../util/dates';
import { parseJson } from '../../../util/json.js';
import SetQuantityForm from './SetQuantityForm';
import styles from './WorkshopPage.module.scss';

export const metadata = {
  title: 'Take part in one of the wonderful workshops from Cornafy Yoga.',
  description: 'Expierence the adventures Yoga workshops from Cornafy Yoga.',
};

type Props = {
  params: {
    workshopId: string;
  };
};

export default async function WorkshopId(props: Props) {
  const singleWorkshop = await getWorkshopInsecure(
    Number(props.params.workshopId),
  );

  //  Inserting a "not found" page
  if (!singleWorkshop) {
    notFound();
  }

  // const workshopsQuantityCookies = getCookie('Cart');
  // // console.log(typeof workshopsQuantityCookies);

  // const workshopQuantity = !workshopsQuantityCookies
  //   ? // Case A - Cookie is undefined
  //     []
  //   : parseJson(workshopsQuantityCookies) || []; // Empty Array in case the JSON.parse is defect or has an error

  // // console.log('workshopQuantity', workshopQuantity);
  // type WorkshopQuantity = {
  //   id: number;
  // };

  // const workshopQuantityToDisplay = workshopQuantity.find(
  //   (quantityWorkshop: WorkshopQuantity) => {
  //     return quantityWorkshop.id === singleWorkshop.id;
  //   },
  // );

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.singleWorkshopHeading}>
        {singleWorkshop.workshopName}
      </h1>
      <div className={styles.contentBox}>
        <div className={styles.contentImage}>
          <Image
            src={`/images/${singleWorkshop.image}.webp`}
            data-test-id="product-image"
            alt={singleWorkshop.workshopName}
            width={500}
            height={650}
          />
        </div>
        <div className={styles.workshopInfo}>
          <div className={styles.workshopDescription}>
            <div>{singleWorkshop.description}</div>
          </div>
          <div>
            <div className={styles.workshopDetails}>
              <div>
                <strong>Location:</strong> {singleWorkshop.location}
              </div>
              <div>
                <strong>Date:</strong>{' '}
                {formatDate(new Date(singleWorkshop.startTime))}
              </div>
              <div>
                <strong>Time:</strong>{' '}
                {formatTime(new Date(singleWorkshop.startTime))} -{' '}
                {formatTime(new Date(singleWorkshop.endTime))}
              </div>
              <div>
                <strong data-test-id="product-price">Price: </strong>€
                {singleWorkshop.price},-
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div className={styles.addViewCart}>
            <SetQuantityForm singleWorkshopId={singleWorkshop.id} />
          </div>
          <div className={styles.link}>
            <Link href="/workshops" className={styles.otherWorkshopLink}>
              Go to all Workshops
            </Link>
            <Link href="/cart" className={styles.viewCart}>
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
