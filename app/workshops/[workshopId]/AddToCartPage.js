'use client';

import { useState } from 'react';
import { addQuantityToCart } from './actions';

export default function AddToCartForm() {
  const [quantity, setQuantity] = useState(0);
  return (
    <form>
      <label>
        Quantity:
        <select
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
        <button formAction={async () => await addQuantityToCart(quantity)}>
          Add to Cart
        </button>
      </label>
    </form>
  );
}
