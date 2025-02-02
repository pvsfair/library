import { pgTable, serial, integer, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user";
import { loaners } from "./loaner";
import { books } from "./book";

export const loans = pgTable("Loan", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  loanerId: integer("loaner_id")
    .notNull()
    .references(() => loaners.id),
  bookId: integer("book_id")
    .notNull()
    .references(() => books.id),
  issueDate: date("issue_date"),
  dueDate: date("due_date"),
  returnDate: date("return_date"),
});

export const loansRelations = relations(loans, ({ one }) => ({
  user: one(users, {
    fields: [loans.userId],
    references: [users.id],
  }),
  loaner: one(loaners, {
    fields: [loans.loanerId],
    references: [loaners.id],
  }),
  book: one(books, {
    fields: [loans.bookId],
    references: [books.id],
  }),
}));
