import React, { useState } from 'react';
import './styles/Theme.css';
import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
// Here we import an application that will audit if the email is accurate
import { validateEmail } from '../utils/helpers';
