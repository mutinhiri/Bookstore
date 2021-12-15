import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const titleInput = document.getElementById('books-input');
    const authorInput = document.getElementById('author-input');

    const newBook = {
      id,
      title: titleInput.value,
      author: authorInput.value,
    };

    dispatch(addBook(newBook));

    titleInput.value = '';
    authorInput.value = '';
  };

  return (
    <div>
      <form action="" onSubmit={submitBookToStore}>
        <input type="text" name="" placeholder="Book" id="books-input" required />
        <input type="text" name="" placeholder="Author" id="author-input" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
