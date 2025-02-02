CREATE TABLE "Author" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"biography" text,
	"birthDate" date,
	"deathDate" date
);
--> statement-breakpoint
CREATE TABLE "Book" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"subtitle" varchar(255),
	"genre_id" integer NOT NULL,
	"publisher_id" integer NOT NULL,
	"format" varchar(50),
	"is_available" boolean,
	"shelf_location" varchar(50),
	"condition" varchar(50),
	"summary" text
);
--> statement-breakpoint
CREATE TABLE "BookAuthor" (
	"book_id" integer NOT NULL,
	"author_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "BookLanguage" (
	"book_id" integer NOT NULL,
	"language_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Genre" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"description" text
);
--> statement-breakpoint
CREATE TABLE "Language" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"code" varchar(10)
);
--> statement-breakpoint
CREATE TABLE "Loan" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"loaner_id" integer NOT NULL,
	"book_id" integer NOT NULL,
	"issue_date" date,
	"due_date" date,
	"return_date" date
);
--> statement-breakpoint
CREATE TABLE "Loaner" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"address" text,
	"phone" varchar(15),
	"email" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "Publisher" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"address" text,
	"phone" varchar(15),
	"email" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "Book" ADD CONSTRAINT "Book_genre_id_Genre_id_fk" FOREIGN KEY ("genre_id") REFERENCES "public"."Genre"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisher_id_Publisher_id_fk" FOREIGN KEY ("publisher_id") REFERENCES "public"."Publisher"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_book_id_Book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."Book"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "BookAuthor" ADD CONSTRAINT "BookAuthor_author_id_Author_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."Author"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "BookLanguage" ADD CONSTRAINT "BookLanguage_book_id_Book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."Book"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "BookLanguage" ADD CONSTRAINT "BookLanguage_language_id_Language_id_fk" FOREIGN KEY ("language_id") REFERENCES "public"."Language"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loaner_id_Loaner_id_fk" FOREIGN KEY ("loaner_id") REFERENCES "public"."Loaner"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_book_id_Book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."Book"("id") ON DELETE no action ON UPDATE no action;