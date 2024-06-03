import Image from 'next/image';
import Link from 'next/link';
import { getWorkshops } from '../../database/workshops.js';

export const metadata = {
  title: 'Retreats',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function Workshops() {
  const workshops = getWorkshops();
  return (
    <div>
      <h1>Upcoming Workshops</h1>
      <br />
      <section>
        <div>
          <ul>
            {workshops.map((workshop) => (
              <li key={`workshops-${workshop.id}`}>
                <div>
                  <div>{workshop.workshopName}</div>
                  <div>
                    <Image
                      src={`/images/${workshop.image}.webp`}
                      data-test-id="product-image"
                      alt={workshop.workshopName}
                      height={200}
                      width={200}
                    />
                  </div>
                  <div>{workshop.location}</div>
                  <div>{workshop.date}</div>
                  <Link href={`/workshops/${workshop.id}`}>More Details</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
