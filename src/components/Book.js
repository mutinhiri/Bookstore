import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchRemoveBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = (event) => {
    const { id } = event.currentTarget;
    dispatch(fetchRemoveBook(id));
  };
  return (
    <li className={styles.book}>
      <div>
        <p className={styles.category}>{book.category}</p>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}> Author</p>
        <div className={styles.btnContainer}>
          <button type="button"> Comments</button>
          <span className={styles.btnDiv}>|</span>
          <button type="button" id={book.item_id} onClick={deleteBookFromStore}>Remove</button>
          <span className={styles.btnDiv}>|</span>
          <button type="button"> Edit</button>
        </div>
      </div>
      <div className={styles.prog}>
        <div className={styles.progCircle}>
          <CircularProgressbar />
        </div>
        <p className={styles.progText}>
          <span className={styles.progNum}> 10%</span>
          <br />
          Complete

        </p>
      </div>
      {/* {`${book.title} in category: ${book.category}`} */}
      {/* <button type="button" id={book.item_id} onClick={deleteBookFromStore}>Delete</button> */}
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
