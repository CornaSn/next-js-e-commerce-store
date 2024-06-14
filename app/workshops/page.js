import Image from 'next/image';
import Link from 'next/link';
import { getWorkshopsInsecure } from '../../database/workshops';
import styles from './Page.module.scss';

export const metadata = {
  title: 'Retreats',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default async function Workshops() {
  const workshops = await getWorkshopsInsecure();

  // console.log('page workshops', workshops);

  return (
    <section className={styles.previewWorkshops}>
      <div className={styles.containerUpcoming}>
        <div>
          <h2>Upcoming Workshops</h2>
          <ul className={styles.workshopList}>
            {workshops.map((workshop) => (
              <li key={`workshops-${workshop.id}`}>
                <div className={styles.workshopItem}>
                  <div className={styles.workshopName}>
                    {workshop.workshopName}
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`/images/${workshop.image}.webp`}
                      data-test-id="product-image"
                      alt={workshop.workshopName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.workshopLocation}>
                    {workshop.location}
                  </div>
                  <div className={styles.workshopDate}>
                    {workshop.startTime.slice(0, 10)}
                  </div>
                  <Link
                    href={`/workshops/${workshop.id}`}
                    className={styles.moreDetailsButton}
                  >
                    More Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
