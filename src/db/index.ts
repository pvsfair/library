// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from "dotenv";

config({ path: ".env" });

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: false
  }
});

export { db }