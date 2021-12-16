import { useSelector } from 'react-redux';
import Form from './Form';
// import React from 'react';

import Book from './Book';

const BooksList = () => {
  const booksStore = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul>
        {
          booksStore.map((book) => (
            <Book key={book.item_id} book={book} />
          ))
        }
      </ul>
      <Form />
    </div>
  );
};

export default BooksList;
