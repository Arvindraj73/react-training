import logo from './logo.svg';
import './App.css';
import BookForm from './components/BookForm';
import Clock from './components/clock';

function App() {
  return (
    <div className="App">
      <p>Library</p>
      <BookForm />
      <Clock />
    </div>
  );
}

export default App;
