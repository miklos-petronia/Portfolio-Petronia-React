import React, { useState } from 'react';
import "./styles/Theme.css"
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

// Utilize object destructuring assignment to remove the elements from the props item
// Allowed it to their own element names
function NavTabs({ currentPage, handlePageChange }) {

    const [showNavColorSecond, setShowNavColorSecond] = useState(false);


    return (
        <MDBNavbar expand='lg' dark bgColor='bg-primary'>
            <MDBContainer fluid>
                <MDBNavbarBrand >Miklos Petronia</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0 '>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-warning'}>
                                About
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link text-warning'}>Portfolio</MDBNavbarLink  >
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-warning'}>Contact</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link text-warning'}>Resume</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavTabs;