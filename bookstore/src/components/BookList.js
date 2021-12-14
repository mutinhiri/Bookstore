import PropTypes from 'prop-types'

function BookList(props) {
  const { books } = props;

  return (
    <div>
      <ul>
        {
          books.map((book) => {
            <li key ={book.title}></li>
          })
        }
      </ul>
    </div>
  )
}