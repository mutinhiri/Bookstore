import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [newBook, setNewbook] = useState({ title: '', author: '' });

  const bookNameHandler = (e) => {
    setNewbook({ ...newBook, title: e.target.value });
  };

  const authorNameHandler = (e) => {
    setNewbook({ ...newBook, author: e.target.value });
  };

  const submitHandler = () => {
    const { title, author } = newBook;

    if (title.length && author.length) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
      };

      dispatch(addBook(newBook));
      setNewbook({ author: '', title: '' });
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" name="" value={newBook.title} placeholder="Book" id="books-input" required onChange={bookNameHandler} />
        <input type="text" name="" value={newBook.author} placeholder="Author" id="author-input" onChange={authorNameHandler} required />
        <button type="submit" onClick={submitHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
