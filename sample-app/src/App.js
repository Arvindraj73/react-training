import logo from './logo.svg';
import './App.css';
import BookForm from './components/BookForm';
import Clock from './components/Clock';
import LoginForm from './components/Login/LoginForm';
import Student from './components/StudentList/Student';

function App() {
  return (
    <div>
      <p>Student List</p>
      <Student />
      <LoginForm />
    </div>
  );
}

export default App;
