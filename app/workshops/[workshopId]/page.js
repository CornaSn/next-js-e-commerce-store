import { cookies } from 'next/headers';
import Image from 'next/image';
import { getWorkshop, getWorkshops } from '../../../database/workshops';
// import { notFound } from '../../not-found.js';
import SetQuantityForm from './SetQuantityForm';
import styles from './WorkshopPage.module.scss';

export default function WorkshopId(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

  // // //  Inserting a "not found" page
  // if (!singleWorkshop) {
  //   notFound();
  // }

  const workshopsQuantityCookies = cookies().get('AddToCart')?.value;

  const workshopsQuantity = JSON.parse(workshopsQuantityCookies);

  const workshopQuantityToDisplay = workshopsQuantity.find(
    (workshopQuantity) => {
      return workshopQuantity.id === singleWorkshop.id;
    },
  );

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
                <strong>Date:</strong> {singleWorkshop.date}
              </div>
              <div>
                <strong>Time:</strong> {singleWorkshop.time}
              </div>
              <div>
                <strong data-test-id="product- price">Price: </strong>
                {singleWorkshop.price}
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <SetQuantityForm
            singleWorkshopId={singleWorkshop.id}
            className={styles.quantityButton}
          />
        </div>
      </div>
    </div>
  );
}
