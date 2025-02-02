import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { loans } from "./loan";

export const users = pgTable("User", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  address: text("address"),
  phone: varchar("phone", { length: 15 }),
  email: varchar("email", { length: 255 }),
});

export const userRelations = relations(users, ({ many }) => ({
  loans: many(loans),
}));
