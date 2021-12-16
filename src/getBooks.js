export default async function getBooks() {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GvF5bPrcWRyBlkGes5xE/books';
  const response = await fetch(url);
  const books = await response.json();

  const newBooks = Object.keys(books).map((key) => ({
    ...books[key][0],
    item_id: key,
  }));

  return Object.values(newBooks);
}
