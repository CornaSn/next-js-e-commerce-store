import Image from 'next/image';
import styles from './Aboutus.module.scss';

export const metadata = {
  title: 'About',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutUsPage}>
      <h1>About us</h1>
      <section>
        <p>
          Welcome to Cornafy Yoga, where wellness meets adventure, and every
          journey is an opportunity for fun and empowerment. We are a vibrant
          community dedicated to helping individuals explore the transformative
          power of yoga, mindfulness, and holistic health practices in dynamic
          and inspiring environments
        </p>
        <p>
          Our story began with a passion for creating experiences that go beyond
          the ordinary. Founded by a team of wellness enthusiasts and adventure
          seekers, Cornafy Yoga is all about embracing life's adventures while
          cultivating inner peace and strength. We believe that true well-being
          comes from a harmonious balance of body, mind, and spirit, achieved
          through engaging and enjoyable practices.
        </p>
        <p>
          At Cornafy Yoga, we offer a diverse range of classes, workshops, and
          retreats designed to meet you where you are on your wellness journey.
          Whether you're new to yoga or an experienced practitioner, our events
          are tailored to inspire and challenge you, fostering growth and
          self-discovery. Our experienced instructors are not just guides; they
          are passionate adventurers who infuse each session with energy,
          creativity, and a sense of fun.
        </p>
        <p>
          We thrive on the power of community and the joy of shared experiences.
          Our gatherings are more than just classes—they are opportunities to
          connect with like-minded individuals, explore new horizons, and
          celebrate personal achievements. From breathtaking outdoor yoga
          sessions to invigorating wellness retreats, every event is crafted to
          empower you and ignite your adventurous spirit.
        </p>
        <p>
          Join us at Cornafy Yoga and become part of a community that values
          health, happiness, and the thrill of discovery. Together, we can
          embark on exciting journeys, both inward and outward, embracing the
          fun and empowerment that come with every step. Discover the joy of
          living fully, adventurously, and authentically with Cornafy Yoga."
        </p>
      </section>
      <section className={styles.aboutUsImages}>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/persona1.webp`}
            alt="Trainer Anja"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/persona2.webp`}
            alt="Trainer Steffi"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/persona3.webp`}
            alt="Trainer Cornelia"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </section>
    </div>
  );
}
