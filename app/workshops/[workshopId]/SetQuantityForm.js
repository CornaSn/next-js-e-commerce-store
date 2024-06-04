'use client';

import { useState } from 'react';
import { addQuantityToCart } from './actions';

export default function SetQuantityForm(props) {
  const [quantity, setQuantity] = useState('');
  return (
    <form>
      <label>
        Quantity:
        <select
          data-test-id="product-quantity"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          data-test-id="product-add-to-cart"
          formAction={async () =>
            await addQuantityToCart(props.singleWorkshopId, quantity)
          }
        >
          Add to Cart
        </button>
      </label>
    </form>
  );
}
