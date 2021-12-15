import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from '../redux/books/books'
import Book from './Book'

import React from 'react'

export default function BookList() {
  const booklist = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const submitBookToStore = (e) => {
    e.preventDefault();

    const id = uuidv4()
    const titleInput = document.getElementById('books-input')
    const authorInput = document.getElementById('author-input');

    const newBook = {
      id,
      title: titleInput.value,
      author: authorInput.value
    }

    dispatch(addBook(newBook));
    titleInput.value = '';
    authorInput.value = '';
  }
  return (
    <div>
      <ul>
        {
          booklist.map((book) => (
            <Book key={book.id} book={ book }/>
          ))
        }
      </ul>
      <form action="" onSubmit={submitBookToStore}>
        <input type="text" name='' placeholder='Book name' id='books-input'/>
      </form>
    </div>
  )
}
