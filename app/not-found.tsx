import Link from 'next/link';
import styles from './Not-Found.module.scss';

export default function RootNotFound() {
  return (
    <>
      <div className={styles.notFound}>
        Sorry this page was not found make sure to visit a page that exists.
      </div>
      <div className={styles.returnHome}>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}
