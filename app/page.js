import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../database/workshops';
import imageHome from '../public/images/imageHome.webp';
import styles from './Page.module.scss';

export default function Home() {
  const workshops = getWorkshops();
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Welcome to Cornafy Yoga!</h1>
          <p>
            Discover the perfect blend of adventure and serenity with Cornafy
            Yoga Workshops. Explore our diverse selection of Workshops.
          </p>
          <Image
            src={imageHome}
            alt="Group Yoga Image"
            width={500}
            height={350}
          />
        </div>
      </div>
      <section className={styles.intro}>
        <h2>HEADING 2</h2>
        <p>
          Lorem ipsum semper habeo duo, ut vis. Aliquyam eu splendide. Ut mei
          eteu nec antiopam corpora. Kasd pretium cetero qui arcu. Assentior ei
          his usu invidunt kasd justo justo. Semper Ne eleifend Per ut Eam
          graeci tincidunt. Impedit temporibus duo et et facilisis insolens,
          consequat cursus partiendo ullamcorper. Vulputate facilisi Donec
          Aliquam labore inimicus voluptua. Penatibus sea Vel amet. His
        </p>
      </section>
      <section className={styles.previewWorkshops}>
        <div>
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
                    <div>{workshop.location}</div>
                    <div>{workshop.date}</div>
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
