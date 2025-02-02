import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { books } from "./book";

export const genres = pgTable("Genre", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
});

export const genreRelations = relations(genres, ({ many }) => ({
  books: many(books),
}));
