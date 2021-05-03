/**
 * 
 * LoginForm
 * 
 */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { vestResolver } from '@hookform/resolvers/vest';
import vest, { test, enforce } from 'vest';


/**
 * test(field, errormessage, callback)
 * @param field - input field to be validated
 * @param errormessage - the message to be displayed in case of error
 * @param callback - callback function to preform the validation logic
 * 
 */
const validationSuite = vest.create((data) => {
    test('password', 'Password must be at least 8 chars', () => {
        enforce(data.password).longerThanOrEquals(8);
    });
    test('password', "Must have at least one special character", () => {
        enforce(data.password).matches(/\W/);
    });
    test('password', "Must have at least one number", () => {
        enforce(data.password).matches(/[0-9]/);
    });
    test('password', "Must have at least one lowercase letter", () => {
        enforce(data.password).matches(/[a-z]/);
    });
    test('password', "Must have at least one uppercase letter", () => {
        enforce(data.password).matches(/[A-Z]/);
    });
    test('password', "Must have at least one lowercase letter", () => {
        enforce(data.password).matches(/[a-z]/);
    });
});

const LoginForm = () => {
    // const [password, setPassword] = useState();
    // const [email, setEmail] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: vestResolver(validationSuite) });

    const submitData = (data, event) => {
        console.log(data);
        event.target[0].value = "";
        event.target[1].value = "";
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <input type="email"  {...register('email')} placeholder="Email" required /><br />

            <input type="password"  {...register('password')} placeholder="Password" required /><br />
            {errors.password && <p>{errors.password.message}</p>}<br />

            <input type="submit" />
        </form>
    );
}

export default LoginForm;

//reset in useform
//show password