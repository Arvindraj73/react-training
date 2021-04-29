/**
 * Table for books
 * @param {object} props Component props from BookFrom
 * @param {array} props.books array of books
 * @param {object} book individual book details
 * @param {number} props.book.sno serial number of book
 * @param {function} props.book.name name of book
 */
function Table(props) {
    return (<table border='1'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Book Name</th>
            </tr>
        </thead>
        <tbody>
            {props.books.map(book => (
                <tr key={book.sno}>
                    <td>{book.sno}</td>
                    <td>{book.name}</td>
                </tr>
            ))}
        </tbody>
    </table>);
}

export default Table;
