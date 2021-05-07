const headers = ['Id', 'First Name', 'Last Name', 'Email', 'Gender'];

const showData = (data) => {
    return data.map(rowData => (
        <tr key={rowData.id}>
            {/* ID */}
            <td>{rowData.id}</td>
            {/* First Name */}
            <td>{rowData.first_name}</td>
            {/* Last Name */}
            <td>{rowData.last_name}</td>
            {/* Email */}
            <td>{rowData.email}</td>
            {/* Gender */}
            <td>{rowData.gender}</td>
        </tr>
    ));
};

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
};

export default Table;
