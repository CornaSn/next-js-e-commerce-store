import Image from 'next/image';
import Link from 'next/link';
import { getWorkshopsInsecure } from '../database/workshops';
import imageHome from '../public/images/imageHome.webp';
import styles from './Page.module.scss';

export default function Home() {
  const workshops = getWorkshopsInsecure();
  return (
    <div>
      <section className={styles.introTop}>
        <div className={styles.container}>
          <div>
            <h1>Welcome to Cornafy Yoga!</h1>
            <p>
              Discover the perfect blend of adventure and serenity with Cornafy
              Yoga. Explore our diverse selection of Workshops.
            </p>
          </div>
        </div>
        <div>
          <Image
            className={styles.bigPictureHome}
            src={imageHome}
            alt="Group Yoga Image"
            width={500}
            height={350}
          />
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <h2>Embark on Your Unique Yoga Adventure</h2>
          <p>
            Immerse yourself in a unique yoga experience where movement and
            creativity meet. Whether you want to master your balance in a
            handstand workshop, challenge yourself with a climbing and yoga
            retreat, or flow to the rhythm of an electro yoga session, we have
            the perfect experience for you. Join a vibrant and supportive
            community dedicated to helping you align your body and mind. Our
            experienced instructors and varied programs cater to all levels,
            from beginners to advanced practitioners. Take the first step
            towards a new yoga journey and discover what Cornafy Yoga has to
            offer.
          </p>
        </div>
      </section>
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
                        height={200}
                        width={200}
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
    </div>
  );
}
