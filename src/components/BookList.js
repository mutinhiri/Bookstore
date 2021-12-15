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
  }
  return (
    <div>
      
    </div>
  )
}
