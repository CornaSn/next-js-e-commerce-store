import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../../database/workshops.js';
import styles from './Page.module.scss';

export const metadata = {
  title: 'Retreats',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function Workshops() {
  const workshops = getWorkshops();
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
                  <div className={styles.workshopDate}>{workshop.date}</div>
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
