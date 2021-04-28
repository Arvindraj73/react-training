import React, { useState } from 'react';
import Table from './table';
function BookForm() {

    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState('');

    const addBook = (event) => {
        event.preventDefault();
        console.log(event);
        setBooks([
            ...books,
            {
                no: books.length + 1,
                name: bookName
            }
        ]);
    }

    return (
        <div>
            <form>
                <input type="text" name="bookname" placeholder="Book Name" onChange={e => setBookName(e.target.value)} />
                <button onClick={addBook}>Add Book</button>
            </form>
            <Table books={books}/>
        </div>
    );

}
export default BookForm;
