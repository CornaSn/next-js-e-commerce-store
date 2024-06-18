'use client';
import { CiCircleRemove } from 'react-icons/ci';
import { removeWorkshop } from './actions';
import styles from './RemoveButton.module.scss';

type Props = {
  workshopId: number;
};

export default function RemoveButton(props: Props) {
  // console.log('props', props);
  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${props.workshopId}`}
        formAction={async () => await removeWorkshop(props.workshopId)}
        className={styles.removeButton}
      >
        REMOVE
        <CiCircleRemove />
      </button>
    </form>
  );
}
