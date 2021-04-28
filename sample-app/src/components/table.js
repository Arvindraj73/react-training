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
                <tr key={book.no}>
                    <td>{book.no}</td>
                    <td>{book.name}</td>
                </tr>
            ))}
        </tbody>
    </table>);
}

export default Table;