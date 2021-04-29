import React, { useState } from 'react';
import Table from './Table';
function BookForm() {

    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState('');
    const [bookNumber, setBookNumber] = useState();
    const [bookNumberError, setBookNumberError] = useState();

    function isDigit(number) {
        let exp = /\D/;
        return exp.test(number);
    }
    //handler to add book on button click
    const addBook = (event) => {
        event.preventDefault();
        if (bookName.length === 0 && isDigit(bookNumber)) {
            
        }
        else {
            setBooks([
                ...books,
                {
                    sno: bookNumber,
                    name: bookName
                }
            ]);
        }
    }

    const changeBookNumber = (e) => {
        if (isDigit(e.target.value)) {
            setBookNumber(null);
            setBookNumberError(true);
        }
        else {
            setBookNumber(e.target.value);
            setBookNumberError(false);
        }
    }
    return (
        <div>
            <form onSubmit={addBook}>
                <input type="text" name="booknumber" placeholder="Book Number" onChange={changeBookNumber} required/><br />
                {bookNumberError ? <span style={{ color: "red" }}>Please Enter a valid Number</span> : ''}<br />
                <input type="text" name="bookname" placeholder="Book Name" onChange={e => setBookName(e.target.value)} required/><br />
                <input type="submit" value="Add Book" />
            </form>
            <Table books={books} />
        </div>
    );

}
export default BookForm;
