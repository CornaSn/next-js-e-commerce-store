import { Sql } from 'postgres';

export type Workshop = {
  id: number;
  workshopName: string;
  location: string;
  startTime: Date;
  endTime: Date;
  price: number;
  image: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE workshops (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      workshop_name varchar(100) NOT NULL,
      location varchar(40) NOT NULL,
      start_time timestamptz NOT NULL,
      end_time timestamptz NOT NULL,
      price integer NOT NULL,
      image varchar(40) NOT NULL,
      description varchar(1000) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE workshops`;
}
