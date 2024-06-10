import Image from 'next/image';
import Link from 'next/link';
import { getWorkshop } from '../../../database/workshops';
import { getCookie } from '../../../util/cookies.js';
import { parseJson } from '../../../util/json.js';
// import { notFound } from '../../not-found.js';
import SetQuantityForm from './SetQuantityForm';
import styles from './WorkshopPage.module.scss';

export default function WorkshopId(props) {
  const singleWorkshop = getWorkshop(Number(props.params.workshopId));

  // // //  Inserting a "not found" page
  // if (!singleWorkshop) {
  //   notFound();
  // }

  const workshopsQuantityCookies = getCookie('AddtoCart');
  // console.log(typeof workshopsQuantityCookies);

  const workshopQuantity = !workshopsQuantityCookies
    ? // Case A - Cookie is undefined
      []
    : parseJson(workshopsQuantityCookies) || []; // Empty Array in case the JSON.parse is defect or has an error

  // console.log('workshopQuantity', workshopQuantity);

  const workshopQuantityToDisplay = workshopQuantity.find(
    (quantityWorkshop) => {
      return quantityWorkshop.id === singleWorkshop.id;
    },
  );
  // console.log('workshopQuantityToDisplay', workshopQuantityToDisplay);

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
