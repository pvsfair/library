import { pgTable, integer, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { books } from "./book";
import { languages } from "./language";

export const booksLanguages = pgTable(
  "BookLanguage",
  {
    bookId: integer("book_id")
      .notNull()
      .references(() => books.id),
    languageId: integer("language_id")
      .notNull()
      .references(() => languages.id),
  },
  (table) => [
    {
      pk: primaryKey({ columns: [table.bookId, table.languageId] }),
    },
  ]
);

export const booksLanguagesRelations = relations(booksLanguages, ({ one }) => ({
  book: one(books, {
    fields: [booksLanguages.bookId],
    references: [books.id],
  }),
  language: one(languages, {
    fields: [booksLanguages.languageId],
    references: [languages.id],
  }),
}));
