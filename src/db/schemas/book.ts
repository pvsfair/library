import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { genres } from "./genre";
import { publishers } from "./publisher";
import { booksLanguages } from "./booksLanguages";
import { booksAuthors } from "./booksAuthors";
import { loans } from "./loan";

export const books = pgTable("Book", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }),
  subtitle: varchar("subtitle", { length: 255 }),
  genreId: integer("genre_id")
    .notNull()
    .references(() => genres.id),
  publisherId: integer("publisher_id")
    .notNull()
    .references(() => publishers.id),
  format: varchar("format", { length: 50 }),
  isAvailable: boolean("is_available"),
  shelfLocation: varchar("shelf_location", { length: 50 }),
  condition: varchar("condition", { length: 50 }),
  summary: text("summary"),
});

export const bookRelations = relations(books, ({ many, one }) => ({
  loans: many(loans),
  booksAuthors: many(booksAuthors),
  booksLanguages: many(booksLanguages),
  genre: one(genres, {
    fields: [books.genreId],
    references: [genres.id],
  }),
  publisher: one(publishers, {
    fields: [books.publisherId],
    references: [publishers.id],
  }),
}));
