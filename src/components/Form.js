import React, { useState } from 'react';
import './styles/Theme.css';
import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
// Here we import an application that will audit if the email is accurate
import { validateEmail } from '../utils/helpers';

function FormHandler() {
    // Develop state elements for the fields in the form
    // Setting introductory values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [Message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Obtaining the element and name of the information which caused the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input information sort, set the state of either email, username, and message
        if (inputType === 'email') {
            setEmail(inputValue);
            if (inputValue === '') {
                setErrorMessage('Email is required');
            } else {
                setErrorMessage('');
            }
        } else if (inputType === 'userName') {
            setUserName(inputValue);
            if (inputValue === '') {
                setErrorMessage('Name is required');
            } else {
                setErrorMessage('');
            }
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Impede the default action of the model submit. In order to refresh the page
        e.preventDefault();

        // Check if the email is not accurate or if the userName is empty. If so we set an failure message to be illustrated on the page.
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            // Exit out of the code block if something goes bad in order for the user tocorrect it
            return;
            // Check to see if the password is not accurate. If so, we set an failllure feedback message regarding the password.
        }
        alert(`Thank you for your message, ${userName}. I will get back to you shortly`);

        // If everything well, set a clear out the input information after a good registration.
        setEmail('');
        setUserName('');
        setMessage('');
    };

    return (
        <Container>
            <h1 className="text-center m-3">Contact Me</h1>
            <Form className="form">
                <input className='rounded p-1'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input className='bg-light rounded  p-1'
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <div className="d-flex flex-column">
                    <textarea className='my-3 bg-light rounded  p-1'
                        value={Message}
                        name="Message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                        rows="10"
                    />
                    <Button type="button" className="bg-dark" onClick={handleFormSubmit}>Submit</Button>
                </div>
            </Form>
            {errorMessage && (
                <div>
                    <h5 className="error-text text-warning text-center">{errorMessage}</h5>
                </div>
            )}
        </Container>
    );
}

export default FormHandler;