import Image from 'next/image';
import imageHome from '../public/images/imageHome.webp';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <section>
        <div>
          <h1>Welcome to Cornafy Yoga!</h1>
          <p>
            Discover the perfect blend of adventure and serenity with Cornafy
            Yoga Retreats. Explore our diverse selection of retreats.
          </p>
          <Image
            src={imageHome}
            alt="Group Yoga Image"
            width={500}
            height={350}
          />
        </div>
      </section>
      <section>
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
      <div>
        <ul>
          <li>
            <h4>Retreat 1</h4>
            <p>
              Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
              pretium cetero qui arcu
            </p>
            <button> -- Zum Retreat</button>
          </li>
          <li>
            <h4>Retreat 2</h4>
            <p>
              Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
              pretium cetero qui arcu
            </p>
            <button> -- Zum Retreat</button>
          </li>
          <li>
            <h4>Retreat 3</h4>
            <p>
              Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
              pretium cetero qui arcu
            </p>
            <button> -- Zum Retreat</button>
          </li>
          <li>
            <h4>Retreat 4</h4>
            <p>
              Aliquyam eu splendide. Ut mei eteu nec antiopam corpora. Kasd
              pretium cetero qui arcu
            </p>
            <button> -- Zum Retreat</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
