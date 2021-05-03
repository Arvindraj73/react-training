import React, { useState } from 'react';
import edit from '../../edit.svg';
import close from '../../close.svg';
import StudentForm from './StudentForm';
/**
 * Table for students
 * @param {object} props Component props from BookFrom
 * @param {array} props.students array of students
 * @param {object} student individual student details
 * @param {number} props.student.rollnumber roll number of student
 * @param {string} props.student.name name of student
 * @param {number} props.student.year year of student
 * @param {string} props.student.department department of student
 */
function Table(props) {

    const [showEdit, setShowEdit] = useState(false);
    const [idToEdit, setIdToEdit] = useState();
    const [rowsToDelete, setRowsToDelete] = useState([]);
    const [checked, setChecked] = useState(false);

    const showEditForm = (event) => {
        setShowEdit(true);
        setIdToEdit(event.target.id);
    };
    const closeEditForm = (event) => {
        setShowEdit(false);
    };

    const deleteSelected = () => {
        rowsToDelete.map(row => {

            props.students.map((student, index) => {
                if (student.rollnumber === row) props.students.splice(index, 1);
            });
        })
        props.setStudents([...props.students]);
        setRowsToDelete([]);
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
            <table border='1'>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Roll Number</th>
                        <th>Student Name</th>
                        <th>Year</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map((student, index) => (
                        <tr key={student.rollnumber}>
                            <td><input type="checkbox" name={student.rollnumber} defaultChecked={checked} onChange={handleChecked} /></td>
                            <td>{student.rollnumber}</td>
                            <td>{student.name}</td>
                            <td>{student.year}</td>
                            <td>{student.department}</td>
                            <td>
                                <button id={index} onClick={showEdit ? closeEditForm : showEditForm}>
                                    <img id={index} src={showEdit ? close : edit} alt="Edit" width="20px" height="20px"></img>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={deleteSelected}>Delete</button>
            {/* {checked ? <button onClick={handleSelected}>Deselect All</button> :  */}
            <button onClick={handleSelected}>Select All</button>
            { showEdit ? <StudentForm editable={true} toEdit={idToEdit} students={props.students} setStudents={props.setStudents} closeEditForm={closeEditForm} /> : null}
        </div >
    );
}

export default Table;
