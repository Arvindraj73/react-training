import React, { useState } from 'react';
import StudentForm from './StudentForm';
import Table from './Table';

const Student = () => {
    const [showForm, setShowForm] = useState(false);
    const [students, setStudents] = useState([]);

    const showFormComponent = (event) => {
        setShowForm(true);
    };

    const hideFormComponent = (event) => {
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={showForm?hideFormComponent:showFormComponent}>{showForm?"Close":"Add"}</button>
            {showForm ? <StudentForm setStudents={setStudents} students={students} editable={false} hideFormComponent={hideFormComponent}/> : null}

            <Table students={students} setStudents={setStudents} />
        </div>
    );
}

export default Student;
