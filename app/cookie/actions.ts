'use server';
import { cookies } from 'next/headers.js';

export async function createCookie(cookieValue: string) {
  await cookies().set('Cart', cookieValue);
}
