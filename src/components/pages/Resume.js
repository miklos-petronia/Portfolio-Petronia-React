import React from 'react';
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import File from "../assets/Miklos_Petronia_VisualCV__2023_Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {

    return (
        <div>
            <h1 className="text-center mt-2 text-warning">Resume</h1>
            <p className="text-warning text-center">Competent in:</p>
            <ul className="text-warning text-center list-unstyled">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MYSQL</li>
                <li>MongoDB</li>
                <li>APIs</li>
                <li>Express</li>
                <li>Progressive Web Applications</li>
                <li>React</li>
            </ul>
            <Row className="justify-content-center m-3 ">
                <Button
                    variant="success"
                    href={File}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    Download Resume
                </Button>
            </Row>
            <Container fluid className=" m-3 mb-0" >
                <Row >
                    <Document file={File} className="d-flex justify-content-center">
                        <Page pageNumber={1} />
                    </Document>
                </Row>

            </Container>
        </div>
    );
}