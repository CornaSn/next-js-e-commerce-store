'use client';

import { useState } from 'react';
import { createCookie } from './actions.js';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState(0);
  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={async () => await createCookie(cookieValue)}>
        Set Cookie
      </button>
    </form>
  );
}
