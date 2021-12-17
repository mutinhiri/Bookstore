import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { populatelist, fetchAddBook } from '../redux/books/books';
import getBooks from '../getBooks';
import styles from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then((result) => dispatch(populatelist(result)));
  }, []);

  const [newBook, setNewbook] = useState({ title: '', category: '' });

  const bookNameHandler = (e) => {
    setNewbook({ ...newBook, title: e.target.value });
  };

  const authorNameHandler = (e) => {
    setNewbook({ ...newBook, category: e.target.value });
  };

  const submitHandler = () => {
    const { title, category } = newBook;

    if (title.length && category.length) {
      const newBook = {
        item_id: uuidv4(),
        title,
        category,
      };

      dispatch(fetchAddBook(newBook));
      setNewbook({ category: '', title: '' });
    }
  };

  return (
    <div>
      <form action="" className={styles.form}>
        <h2 className={styles.formTitle}> Add new book</h2>
        <input type="text" name="" value={newBook.title} placeholder="Book" required onChange={bookNameHandler} />
        <input type="text" name="" value={newBook.category} placeholder="Category" onChange={authorNameHandler} required />
        <button className={styles.formBtn} type="submit" onClick={submitHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
