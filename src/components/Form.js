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