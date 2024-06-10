'use client';
import { CiCircleRemove } from 'react-icons/ci';
import { removeWorkshop } from './actions';
import styles from './RemoveButton.module.scss';

export default function RemoveButton(props) {
  // console.log('props', props);
  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${props.workshopId}`}
        formAction={async () => await removeWorkshop(props.workshopId)}
        className={styles.removeButton}
      >
        <CiCircleRemove />
      </button>
    </form>
  );
}
