import React from 'react';
import Card from "../Card";
import Footer from "../Footer"

const projects = [
    {
        id: 1,
        name: 'MARVS Sports-App',
        description: 'A page where soccer fans can input a league of their choice (British Premier League/Bundesliga/La Liga/World Cup/etc) and see news headlines and scores/match times and dates. ',
        image: "https://unsplash.com/photos/OgqWLzWRSaI",
        repo: 'https://github.com/miklos-petronia/sports-app.git',
        live: 'https://miklos-petronia.github.io/sports-app/'
    },
    {
        id: 2,
        name: 'Phantom Plates',
        description: 'Phantom Plates is a platform that connects home cooks with locals who are looking to discover and purchase home-cooked meals and baked goods.',
        image: "https://source.unsplash.com/cc0Gg3BegjE",
        repo: 'https://github.com/Steven-McCombe/Phantom-Plates',
        live: 'https://peaceful-plains-78578.herokuapp.com/'
    },
    {
        id: 3,
        name: 'TechTalk',
        description: 'TechTalk Blog! This is a place where tech enthusiasts can come together to share their ideas and knowledge.',
        image: "https://source.unsplash.com/mk7D-4UCfmg",
        repo: 'https://github.com/Steven-McCombe/techtalk',
        live: 'https://powerful-stream-84174.herokuapp.com/'
    },
    {
        id: 4,
        name: 'World Cup Quiz',
        description: 'Fun interactive quiz to test your knowledge on world cup history, see if you can make it to the top of the hiscores',
        image: "https://source.unsplash.com/oW8ph9u07uo",
        repo: 'https://github.com/Steven-McCombe/world-cup-quiz',
        live: 'https://steven-mccombe.github.io/world-cup-quiz/'
    },
    {
        id: 5,
        name: 'Weather Report',
        description: 'Weather forecasting application that takes in a users search criteria for a particular city and returns the current/forecasted weather conditions. ',
        image: "https://source.unsplash.com/SuJp8ZpkubI",
        repo: 'https://github.com/Steven-McCombe/Weather-Report-App',
        live: 'https://steven-mccombe.github.io/Weather-Report-App/'
    },
    {
        id: 6,
        name: 'PWA Text Editor',
        description: 'This is a browser-based text editor that functions as a single-page application and as a progressive web app (PWA).',
        image: 'https://source.unsplash.com/5VM5SHrs_E8',
        repo: 'https://github.com/Steven-McCombe/PWA_Text_Editor',
        live: 'https://lit-coast-23795.herokuapp.com/'
    },
];

export default function Portfolio() {
    return (
        <div>
            <div className='container'>
                <h1 className='color-w text-center m-3'>My Work</h1>
                <Card projects={projects} />
            </div>
        </div>
    )
}