import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-dom'
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1'
    }
  ]
  return (
    <div className="App">
     <h1>hello</h1>
    </div>
  );
}

export default App;
