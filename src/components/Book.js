import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = (event) => {
    const { id } = event.currentTarget;
    dispatch(removeBook(id));
  };
  return (
    <li>
      {`${book.title} by ${book.author}`}
      <button type="button" id={book.id} onClick={deleteBookFromStore}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
