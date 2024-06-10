'use server';
import { cookies } from 'next/headers.js';

export async function clearCookies() {
  await cookies().delete('AddToCart');
}
