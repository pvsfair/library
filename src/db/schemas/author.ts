import { pgTable, serial, text, date, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { booksAuthors } from "./booksAuthors";

export const authors = pgTable("Author", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  biography: text("biography"),
  birthDate: date("birthDate"),
  deathDate: date("deathDate"),
});

export const authorRelations = relations(authors, ({ many }) => ({
  booksAuthors: many(booksAuthors),
}));
