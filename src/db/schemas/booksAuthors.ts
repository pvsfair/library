import { pgTable, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { books } from "./book";
import { authors } from "./author";

export const booksAuthors = pgTable("BookAuthor", {
  bookId: integer("book_id")
    .notNull()
    .references(() => books.id),
  authorId: integer("author_id")
    .notNull()
    .references(() => authors.id),
});

export const bookAuthorsRelations = relations(booksAuthors, ({ one }) => ({
  book: one(books, {
    fields: [booksAuthors.bookId],
    references: [books.id],
  }),
  author: one(authors, {
    fields: [booksAuthors.authorId],
    references: [authors.id],
  }),
}));
