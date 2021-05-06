const headers = ['Id', 'First Name', 'Last Name', 'Email', 'Gender'];

const showData = (data) => {
    return data.map(rowData => (
        <tr key={rowData.id}>
            <td>{rowData.id}</td>
            <td>{rowData.first_name}</td>
            <td>{rowData.last_name}</td>
            <td>{rowData.email}</td>
            <td>{rowData.gender}</td>
        </tr>
    ))
}

const Table = ({ data }) => {
    return (<table border='1'>
        <thead>
            <tr>
                {headers.map((header, index) => <th key={index}>{header}</th>)}
            </tr>
        </thead>
        <tbody>
            {showData(data)}
        </tbody>
    </table>);
}

export default Table;