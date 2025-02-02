import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { books } from "./book";

export const publishers = pgTable("Publisher", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
});

export const publisherRelations = relations(publishers, ({ many }) => ({
  books: many(books),
}));
