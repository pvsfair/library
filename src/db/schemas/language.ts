import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { booksLanguages } from "./booksLanguages";

export const languages = pgTable("Language", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  code: varchar("code", { length: 10 }),
});

export const languageRelations = relations(languages, ({ many }) => ({
  bookLanguages: many(booksLanguages),
}));
