import { config } from 'dotenv-safe';
import postgres from 'postgres';

console.log(config());

config();

const sql = postgres();

console.log(
  await sql`
    SELECT
      *
    FROM
      workshops
  `,
);

await sql.end();
