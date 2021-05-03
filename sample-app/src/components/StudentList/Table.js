/**
 * 
 * Table
 * 
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import edit from '../../edit.svg';
import close from '../../close.svg';
import StudentForm from './StudentForm';

function Table(
    {
        students,
        setStudents,

    }
) {

    const [showEdit, setShowEdit] = useState(false);
    const [idToEdit, setIdToEdit] = useState();
    const [rowsToDelete, setRowsToDelete] = useState([]);
    const [checked, setChecked] = useState(false);

    const headers = ['Select', 'Roll Number', 'Student Name', 'Year', 'Department', 'Action'];

    const showEditForm = (event) => {
        setShowEdit(true);
        setIdToEdit(event.target.id);
    };
    const closeEditForm = () => {
        setShowEdit(false);
    };

    const deleteSelected = () => {
        if (window.confirm("Do you want to delete the selected fields")) {
            rowsToDelete.map(row => {
                students.map((student, index) => {
                    (student.rollnumber === row) && students.splice(index, 1);
                });
            })
            setStudents([...students]);
            setRowsToDelete([]);
        }
    };

    const handleChecked = (event) => {
        if (event.target.checked) {
            setRowsToDelete([...rowsToDelete, event.target.name]);
        }
        else {
            rowsToDelete.splice(rowsToDelete.indexOf(event.target.name), 1);
        }
    };

    const handleSelected = () => {
        setChecked(true);
    };

    return (
        <div>
            <button onClick={deleteSelected}>Delete</button>
            <button onClick={handleSelected}>Select All</button>
            <table border='1'>
                <thead>
                    <tr>
                        {headers.map((header, index) => <th key={index}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.rollnumber}>
                            {/*CheckBox*/}
                            <td><input type="checkbox" name={student.rollnumber} defaultChecked={checked} onChange={handleChecked} /></td>
                            {/*Roll Number*/}
                            <td>{student.rollnumber}</td>
                            {/*Student Name*/}
                            <td>{student.name}</td>
                            {/*Year*/}
                            <td>{student.year}</td>
                            {/*Department*/}
                            <td>{student.department}</td>
                            {/*Edit Button*/}
                            <td>
                                <button id={index} onClick={showEdit ? closeEditForm : showEditForm}>
                                    <img id={index} src={showEdit ? close : edit} alt="Edit" width="20px" height="20px"></img>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*Edit Form*/}
            { showEdit ? <StudentForm editable={true} toEdit={idToEdit} students={students} setStudents={setStudents} closeEditForm={closeEditForm} /> : null}
        </div >
    );
}

Table.propTypes = {
    students: PropTypes.array,
    setStudents: PropTypes.func
};

export default Table;
