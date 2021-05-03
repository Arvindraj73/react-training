/**
 * 
 * Student
 * 
 */
import React, { useState } from 'react';
import StudentForm from './StudentForm';
import Table from './Table';

const Student = () => {
    const [showForm, setShowForm] = useState(false);
    const [students, setStudents] = useState([]);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            {/*main form*/}
            {showForm ?
                <StudentForm
                    setStudents={setStudents}
                    students={students}
                    editable={false}
                    closeForm={closeForm} />
                : null
            }
            {/*Add and Close Button */}
            <button onClick={
                showForm ? closeForm : openForm
            }>
                {showForm ? "Close" : "Add"}
            </button>
            {/*Table of Students*/}
            <Table students={students} setStudents={setStudents} />
        </div>
    );
}

export default Student;
