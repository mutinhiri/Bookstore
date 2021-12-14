import PropTypes from 'prop-types'

function BookList(props) {
  const { books } = props;

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li key={book.title}>{ `${book.title} by ${book.author}`}</li>
          ))
        }
      </ul>
      <form action="">
        <input type="text" name='' id='' />
        <button type='button'>add book</button>
      </form>

    </div>
  )
}

BookList.propTypes = {
  books : PropTypes.instanceOf(Array).isRequired
}

export default BookList