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
        image: "https://unsplash.com/photos/VBsG1VOgLIU",
        repo: 'https://github.com/Steven-McCombe/Phantom-Plates.git',
        live: 'https://rocky-cliffs-36695.herokuapp.com/'
    },
    {
        id: 3,
        name: 'TechTalk',
        description: 'TechTalk Blog! This is a place where tech enthusiasts can come together to share their ideas and knowledge.',
        image: "https://unsplash.com/photos/tLZhFRLj6nY",
        repo: 'https://github.com/miklos-petronia/Tech-Summit-Blog-Post.git',
        live: 'https://tech-summit-blog.herokuapp.com/'
    },
    {
        id: 4,
        name: 'Text-PWA-Editor',
        description: 'a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. It will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.',
        image: "https://unsplash.com/photos/VW2oU66mwbc",
        repo: 'https://github.com/miklos-petronia/Text-PWA-Editor.git',
        live: 'https://text-pwa-editor007.herokuapp.com/'
    },
    {
        id: 5,
        name: 'Under-Note-Taker',
        description: 'a Noter taker application app, used to write and save your notes. The application uses express.js back end and would save and take note data from a json file. ',
        image: "https://unsplash.com/photos/RLw-UC03Gwc",
        repo: 'https://github.com/miklos-petronia/under-note-taker.git',
        live: 'https://under-note-taker1.herokuapp.com/notes'
    },
    {
        id: 6,
        name: 'Code-Quiz',
        description: 'The user would click on the link to go through the code quiz and has 30 seconds to finish the quiz. The quiz has four technical questions, which can be answered in a multiple-choice form consisting of choices of A, B, C, or D.',
        image: 'https://unsplash.com/photos/cbEvoHbJnIE',
        repo: 'https://github.com/miklos-petronia/Code-Quiz.git',
        live: 'https://miklos-petronia.github.io/Code-Quiz/'
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