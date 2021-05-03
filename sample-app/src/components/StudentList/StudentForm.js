import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
function StudentFrom(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addStudent = (data) => {

        if (props.editable) {
            props.students[props.toEdit] = data;
            props.setStudents([...props.students]);
            props.closeEditForm();
        }
        else {
            props.setStudents([...props.students, data]);
            props.hideFormComponent();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(addStudent)}>
                <input
                    defaultValue={props.editable ? props.students[props.toEdit].rollnumber : ""}
                    type="text"
                    {...register('rollnumber')}
                    placeholder="Roll Number"
                    required /><br />
                <input
                    defaultValue={props.editable ? props.students[props.toEdit].name : ""}
                    type="text"
                    {...register('name')}
                    placeholder="Student Name"
                    required /><br />
                <select defaultValue={props.editable ? props.students[props.toEdit].year : ""} {...register("year")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select defaultValue={props.editable ? props.students[props.toEdit].department : ""} {...register("department")}>
                    <option value="Cse">CSE</option>
                    <option value="Mech">MECH</option>
                    <option value="Ece">ECE</option>
                    <option value="Eee">EEE</option>
                    <option value="Civil">CIVIl</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );

}
export default StudentFrom;
