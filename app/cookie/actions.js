'use server';

import { cookies } from 'next/headers.js';

export async function createCookie(cookieValue) {
  await cookies().set('AlexCookie', cookieValue);
}
