const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const POPULATE_LIST = 'bookStore/books/POPULATE_LIST'

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_LIST:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const populatelist = (payload) => ({
  type: POPULATE_LIST,
  payload,
})

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default booksReducer;
