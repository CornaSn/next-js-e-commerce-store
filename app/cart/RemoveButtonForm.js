'use client';
import { removeWorkshop } from './actions';

export default function RemoveButton(props) {
  // console.log('props', props);
  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${props.workshopId}`}
        formAction={async () => await removeWorkshop(props.workshopId)}
      >
        Remove
      </button>
    </form>
  );
}
