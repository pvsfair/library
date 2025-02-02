// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
import * as schema from "./schemas";

config({ path: ".env" });

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  },
  schema,
});

export { db };
