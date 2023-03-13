import React from 'react';
import "../styles/About.css"
import Header from "../Header"
import { Container } from "react-bootstrap"
import backgroundImage from "../assets/images/profilepicture.png"


const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '900px',
    width: '900',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
   };
export default function About() {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='container'>
                    <div className='text-warning'>
                        <p className='mb-3 mt-3'> My name is Miklos Petronia, and I am from the island of Aruba. I am a business developer with a master of science degree in strategic entrepreneurship from Erasmus University, located; in the Netherlands. I love to challenge myself and exceed expectations. My passion is entrepreneurship, bringing innovation into my work,  and achieving the best possible result. As a result, I took it upon myself to learn to code and become a full-stack web developer to complement my learned entrepreneurial skillsets. I am excited to see what I will create and collaborate with other like-minded individuals to develop something that would benefit people's daily lives. It is my first step to learning programming,  and there is more to come!</p>
                    </div>
                </div>
            </div>
            <div
                className='p-5 img-fluid '
                style={backgroundStyles}
            >
            </div>

        </div>
    );
}