import { db } from "@/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await db.query.books.findMany({
    with: {
      publisher: { columns: { name: true } },
      genre: { columns: { name: true } },
    },
    columns: {
      id: true,
      title: true,
    },
  });
  return (
    <>
      {result.map((book) => (
        <p key={book.id}>
          {book.genre.name} - {book.title} ({book.publisher.name})
        </p>
      ))}
    </>
  );
}
