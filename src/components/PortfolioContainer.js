import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import Footer from './Footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // What value` present Page` is. Return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div >
            {/* Passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Calling the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
    );
}