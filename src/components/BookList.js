import { useSelector } from 'react-redux';
import Form from './Form';
// import React from 'react';

import Book from './Book';

const BooksList = () => {
  const booksStore = useSelector((state) => state.books);

  // const submitBookToStore = (e) => {
  //     e.preventDefault();

  //     const id = uuidv4();
  //     const titleInput = document.getElementById('books-input');
  //     const authorInput = document.getElementById('author-input');

  //     const newBook = {
  //       id,
  //       title: titleInput.value,
  //       author: authorInput.value,
  //     };

  //     dispatch(addBook(newBook));

  //     titleInput.value = '';
  //     authorInput.value = '';
  //   };

  return (
    <div className="container">
      <ul>
        {
          booksStore.map((book) => (
            <Book key={book.id} book={book} />
          ))
        }
      </ul>
      <Form />
    </div>
  );
};

export default BooksList;
