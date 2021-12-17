import { useSelector } from 'react-redux';
import Form from './Form';
import styles from './Form.module.css';
// import React from 'react';

import Book from './Book';

const BooksList = () => {
  const booksStore = useSelector((state) => state.books);

  return (
    <div className={styles.container}>
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
