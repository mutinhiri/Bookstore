import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = (event) => {
    const { id } = event.currentTarget;
    dispatch(fetchRemoveBook(id));
  };
  return (
    <li>
      {`${book.title} in category: ${book.category}`}
      <button type="button" id={book.item_id} onClick={deleteBookFromStore}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
