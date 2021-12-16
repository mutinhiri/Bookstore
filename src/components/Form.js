import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { populatelist, fetchAddBook } from '../redux/books/books';
import getBooks from '../getBooks';

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then((result) => dispatch(populatelist(result)));
  }, []);

  const [newBook, setNewbook] = useState({ title: '', category: '', id: uuidv4() });

  const bookNameHandler = (e) => {
    setNewbook({ ...newBook, title: e.target.value });
  };

  const authorNameHandler = (e) => {
    setNewbook({ ...newBook, category: e.target.value });
  };

  const submitHandler = () => {
    const { title, category, id } = newBook;

    if (title.length && category.length) {
      const newBook = {
        item_id: id,
        title,
        category,
      };

      dispatch(fetchAddBook(newBook));
      setNewbook({ category: '', title: '', id: '' });
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" name="" value={newBook.title} placeholder="Book" id="books-input" required onChange={bookNameHandler} />
        <input type="text" name="" value={newBook.category} placeholder="Category" id="author-input" onChange={authorNameHandler} required />
        <button type="submit" onClick={submitHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
