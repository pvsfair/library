import { db } from "./index";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: "src/db/migrations" })
        console.log("migrations completed")
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

main()