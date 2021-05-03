/**
 * 
 * StudentForm
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
function StudentFrom({
    editable,
    students,
    setStudents,
    toEdit,
    closeEditForm,
    closeForm
}) {
    const { register, handleSubmit } = useForm();
    const departments = ['Cse', 'Eee', 'Ece', 'Mech', 'Civil'];
    const years = [1, 2, 3, 4];

    const addStudent = (data) => {
        if (editable) {
            students[toEdit] = data;
            setStudents([...students]);
            closeEditForm();
        }
        else {
            setStudents([...students, data]);
            closeForm();
        }
    }

    return (
        <form onSubmit={handleSubmit(addStudent)}>
            {/*Roll Number*/}
            <input
                defaultValue={editable ? students[toEdit].rollnumber : ""}
                type="text"
                {...register('rollnumber')}
                placeholder="Roll Number" required /><br />
            {/*Student Name*/}
            <input
                defaultValue={editable ? students[toEdit].name : ""}
                type="text"
                {...register('name')}
                placeholder="Student Name"
                required /><br />
            {/*Year*/}
            <select
                defaultValue={editable ? students[toEdit].year : ""}
                {...register("year")}>
                {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </select><br />
            {/*Department*/}
            <select
                defaultValue={editable ? students[toEdit].department : ""}
                {...register("department")}>
                {departments.map((department, index) => <option key={index} value={department}>{department}</option>)}
            </select><br />
            {/*Submit*/}
            <input type="submit" />
        </form>
    );
}

StudentFrom.propTypes = {
    editable: PropTypes.bool.isRequired,
    students: PropTypes.array.isRequired,
    setStudents: PropTypes.func.isRequired,
    toEdit: PropTypes.number,
    closeEditForm: PropTypes.func,
    closeForm: PropTypes.func
}

export default StudentFrom;
