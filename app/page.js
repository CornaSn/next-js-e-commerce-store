import Image from 'next/image';
import imageHome from '../public/images/imageHome.webp';
import styles from './Page.module.scss';

export default function Home() {
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
          <ul>
            <li>
              <h4>Workshop 1</h4>
              <p>
                Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
                pretium cetero qui arcu
              </p>
              <button>-- Zum Workshop</button>
            </li>
            <li>
              <h4>Workshop 2</h4>
              <p>
                Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
                pretium cetero qui arcu
              </p>
              <button> -- Zum Workshop</button>
            </li>
            <li>
              <h4>Workshop 3</h4>
              <p>
                Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
                pretium cetero qui arcu
              </p>
              <button> -- Zum Workshop</button>
            </li>
            <li>
              <h4>Workshop 4</h4>
              <p>
                Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
                pretium cetero qui arcu
              </p>
              <button> -- Zum Workshop</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
