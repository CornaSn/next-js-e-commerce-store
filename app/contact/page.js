import styles from './Contact.module.scss';

export const metadata = {
  title: 'Contact',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      {' '}
      <h1>Get in Touch with Cornafy Yoga</h1>
      <h3>
        We'd love to hear from you! Reach out with any questions, comments, or
        feedback.
      </h3>
      <section>
        <div>
          Address:
          <p>Cornafy Yoga Studio</p>
          <p>996 Yoga Street</p>
          <p>1203 Yoga City</p>
          <p>Austria</p>
        </div>
        <div>
          Phone:
          <a href="tel:+123-456-7890">+123-456-7890</a>
        </div>
        <div>
          E-mail:
          <a href="mailto:info@cornafyoga.com">info@cornafyoga.com</a>
        </div>
      </section>
      <section>
        <div className={styles.questions}>
          Common Questions:
          <p className={styles.question}>How can I sign up for a workshop?</p>
          <p className={styles.question}>What should I bring to a retreat?</p>
          <p className={styles.question}>Do you offer online classes?</p>
        </div>
      </section>
    </div>
  );
}
